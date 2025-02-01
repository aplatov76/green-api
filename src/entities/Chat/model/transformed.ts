import { ChatHistoryArgs, ChatHistoryArgsWithMessage } from '../types/args'
import { ChatHistory, ReceiveIncomingNotificationsType } from '../types/res'
import { ChatHistoryTransformed, NotificationTransformed } from '../types/transfomed'
import { historyMessageType } from '/src/shared/types/api'
import { getCurrentTime, timeStampToTime } from '/src/shared/utils'

export const transformedChatHistoryData = (data: ChatHistory[]): ChatHistoryTransformed[] => {
  return data
    .map(({ type, textMessage, senderId, senderName, timestamp, idMessage }) => {
      const formattedTime = timeStampToTime(timestamp)

      return { type, textMessage, senderId, senderName, formattedTime, idMessage }
    })
    .reverse()
}

export const transformedNotification = (data: ReceiveIncomingNotificationsType | null, _, arg: ChatHistoryArgs) => {
  if (!data) {
    return null
  }

  const isIncludeCurrentSender = data.body.senderData.sender.includes(arg.phoneNumber)

  if (!isIncludeCurrentSender) {
    return null
  }

  const { body, receiptId } = data
  const formattedTime = timeStampToTime(body.timestamp)

  const type = historyMessageType.incoming

  const textMessage = body.messageData.textMessageData.textMessage

  return {
    type,
    textMessage,
    idMessage: body.idMessage,
    senderId: body.senderData.sender,
    senderName: body.senderData.senderName,
    formattedTime,
    receiptId
  }
}

export const transformedDeleteMessage = (
  data: { idMessage: string },
  _,
  arg: ChatHistoryArgsWithMessage
): NotificationTransformed => {
  return {
    idMessage: data.idMessage,
    type: historyMessageType.outcoming,
    textMessage: arg.message,
    senderId: arg.phoneNumber,
    senderName: '',
    formattedTime: getCurrentTime()
  }
}
