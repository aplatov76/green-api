import { StateSchema } from '/src/app/providers/store/config/stateSchema'

export const getPhoneNumberSelector = (state: StateSchema) => state.chat.phoneNumber
export const getNotificationsSelector = (state: StateSchema) => state.chat.notifications
