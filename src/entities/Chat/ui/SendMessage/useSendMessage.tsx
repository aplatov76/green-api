import { useState } from 'react'
import { useSendMessageMutation } from '../../model/api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useAppDispatch'
import { getPhoneNumberSelector } from '../../model/selectors'
import { ChatActions } from '../..'
import { getAuthDataSelector } from '@/entities/Auth/AuthForm'

export const useSendMessage = () => {
  const dispatch = useAppDispatch()

  const apiBaseArgs = useAppSelector(getAuthDataSelector)
  const phoneNumber = useAppSelector(getPhoneNumberSelector)
  const [message, setMessage] = useState('')

  const [mutate, { isLoading }] = useSendMessageMutation()

  //TODO использовать RTK reselect т.к. используется не только здесь
  const isDisabled =
    !(Boolean(apiBaseArgs.idInstance) && Boolean(apiBaseArgs.apiTokenInstance) && Boolean(message.trim())) || isLoading

  const onClear = () => {
    setMessage('')
  }

  const onSubmit = async () => {
    const transformedMessage = await mutate({
      idInstance: apiBaseArgs.idInstance,
      apiTokenInstance: apiBaseArgs.apiTokenInstance,
      phoneNumber,
      message
    }).unwrap()

    dispatch(ChatActions.setNotification(transformedMessage))
    onClear()
  }

  return { message, isDisabled, setMessage, onSubmit }
}
