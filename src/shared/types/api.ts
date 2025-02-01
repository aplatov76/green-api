import { ValuesOf } from './utils'

export type BaseApiArgs = {
  idInstance: string
  apiTokenInstance: string
}

export const historyMessageType = {
  incoming: 'incoming',
  outcoming: 'outcoming'
} as const

export type HistoryMessageType = ValuesOf<typeof historyMessageType>

export const messageReceived = {
  incomingMessageReceived: 'incomingMessageReceived',
  outcomingMessageReceived: 'outgoingAPIMessageReceived'
} as const

export type MessageReceivedType = ValuesOf<typeof messageReceived>
