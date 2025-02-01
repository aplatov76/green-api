import { Provider } from 'react-redux'
import { type ReactNode } from 'react'
import { type StateSchema } from '../config/stateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}
