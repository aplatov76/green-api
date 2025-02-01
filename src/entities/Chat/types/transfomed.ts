import { ChatHistory } from './res'

export type ChatHistoryTransformed = Pick<
  ChatHistory,
  'type' | 'textMessage' | 'senderId' | 'senderName' | 'idMessage'
> & {
  formattedTime: string
}

export type NotificationTransformed = ChatHistoryTransformed & { receiptId?: number }
