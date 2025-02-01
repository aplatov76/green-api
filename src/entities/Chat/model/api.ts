import { baseApi } from '@/shared/api/api'
import { BaseApiArgs } from '@/shared/types/api'
import { getChatId, getUrl } from '/src/shared/utils'
import { ChatHistoryTransformed, NotificationTransformed } from '../types/transfomed'
import { transformedChatHistoryData, transformedDeleteMessage, transformedNotification } from './transformed'
import { ChatHistoryArgs, ChatHistoryArgsWithMessage } from '../types/args'

const chatHistoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getChatHistory: build.query<ChatHistoryTransformed[], ChatHistoryArgs>({
      query: ({ idInstance, apiTokenInstance, phoneNumber }) => ({
        url: `${getUrl(idInstance)}waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        method: 'POST',
        body: {
          chatId: getChatId(phoneNumber)
        }
      }),
      providesTags: () => ['History'],
      transformResponse: transformedChatHistoryData
    }),
    getNotification: build.query<NotificationTransformed | null, ChatHistoryArgs>({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `${getUrl(idInstance)}waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
        method: 'GET'
      }),
      transformResponse: transformedNotification,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      }
    }),
    deleteNotification: build.mutation<ChatHistoryTransformed, BaseApiArgs & { id: number }>({
      query: ({ idInstance, apiTokenInstance, id }) => ({
        url: `${getUrl(idInstance)}waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`,
        method: 'DELETE'
      })
    }),
    sendMessage: build.mutation<NotificationTransformed, ChatHistoryArgsWithMessage>({
      query: ({ idInstance, apiTokenInstance, phoneNumber, message }) => ({
        url: `${getUrl(idInstance)}waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        method: 'POST',
        body: {
          chatId: getChatId(phoneNumber),
          message
        }
      }),
      transformResponse: transformedDeleteMessage
    })
  })
})

export const useGetNotification = chatHistoryApi.useGetNotificationQuery
export const useGetChatHistory = chatHistoryApi.useGetChatHistoryQuery
export const useSendMessageMutation = chatHistoryApi.useSendMessageMutation
export const useDeleteNotification = chatHistoryApi.useDeleteNotificationMutation
