import { BaseApiArgs } from '@/shared/types/api'

export interface ChatHistoryArgs extends BaseApiArgs {
  phoneNumber: string
}

export interface ChatHistoryArgsWithMessage extends ChatHistoryArgs {
  message: string
}
