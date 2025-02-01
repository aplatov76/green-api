import { AuthSliceState } from '/src/entities/Auth/AuthForm/types'
import { ChatDialogState } from '/src/entities/Chat'
import { baseApi } from '/src/shared/api/api'

export interface StateSchema {
  auth: AuthSliceState
  chat: ChatDialogState
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
}
export type StateSchemaKey = keyof StateSchema
