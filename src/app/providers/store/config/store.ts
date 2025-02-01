import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'

import { AuthReducer } from '/src/entities/Auth/AuthForm'
import { baseApi } from '/src/shared/api/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ChatReducer } from '/src/entities/Chat'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: AuthReducer,
    chat: ChatReducer,
    [baseApi.reducerPath]: baseApi.reducer
  }

  const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
  })

  setupListeners(store.dispatch)

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
