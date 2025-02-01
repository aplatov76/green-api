import { HistoryMessageType, MessageReceivedType } from '@/shared/types/api'

export interface ReceiveIncomingNotificationsType {
  receiptId: number
  body: {
    typeWebhook: MessageReceivedType
    instanceData: {
      idInstance: number
      wid: string
      typeInstance: string
    }
    timestamp: number
    idMessage: string
    senderData: {
      chatId: string
      chatName: string
      sender: string
      senderName: string
      senderContactName: string
    }
    messageData: {
      typeMessage: string
      textMessageData: {
        textMessage: string
      }
      extendedTextMessageData: {
        text: string
        description: string
        title: string
        previewType: string
        jpegThumbnail: string
        forwardingScore: number
        isForwarded: false
      }
    }
  }
}

export type ChatHistory = {
  type: HistoryMessageType
  idMessage: string
  timestamp: number
  typeMessage: string
  chatId: string
  textMessage: string
  senderId: string
  senderName: string
  senderContactName: string
  deletedMessageId: string
  editedMessageId: string
  isEdited: boolean
  isDeleted: boolean
}
