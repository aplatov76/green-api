import { useEffect, useRef } from 'react'
import { useDeleteNotification, useGetChatHistory, useGetNotification } from '../../model/api'
import { getNotificationsSelector, getPhoneNumberSelector } from '../../model/selectors'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useAppDispatch'
import { ChatActions } from '../..'
import { getAuthDataSelector } from '@/entities/Auth/AuthForm'

const pollingInterval = 3000

export const useDialog = () => {
  const dispatch = useAppDispatch()
  const chatRef = useRef<HTMLDivElement>(null)

  const apiBaseArgs = useAppSelector(getAuthDataSelector)
  const phoneNumber = useAppSelector(getPhoneNumberSelector)
  const notifications = useAppSelector(getNotificationsSelector)

  const isBaseSkip = !(Boolean(apiBaseArgs.idInstance) && Boolean(apiBaseArgs.apiTokenInstance) && Boolean(phoneNumber))

  const [deleteNotification, { isLoading: isDeletedLoading }] = useDeleteNotification()
  const { data: chatHistory = [] } = useGetChatHistory({ ...apiBaseArgs, phoneNumber }, { skip: isBaseSkip })

  const isSkip = isBaseSkip || isDeletedLoading

  const {
    data: notification,
    isFetching,
    isUninitialized
  } = useGetNotification({ ...apiBaseArgs, phoneNumber }, { skip: isSkip, refetchOnFocus: true, pollingInterval })

  const deleteNotificationInQuene = async (id: number) => {
    await deleteNotification({ ...apiBaseArgs, id }).unwrap()
  }

  useEffect(() => {
    if (isUninitialized) {
      return
    }

    if (isFetching) {
      return
    }
    if (notification) {
      const removedId = notification.receiptId

      dispatch(ChatActions.setNotification(notification))

      if (removedId) deleteNotificationInQuene(removedId)

      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight)
    }
  }, [notifications, chatHistory])

  return { chatHistory, notifications, isFetching, chatRef }
}
