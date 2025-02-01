import { StateSchema } from '/src/app/providers/store/config/stateSchema'

export const getAuthDataSelector = (state: StateSchema) => state.auth
