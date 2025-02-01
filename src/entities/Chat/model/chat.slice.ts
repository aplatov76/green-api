import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NotificationTransformed } from '../types/transfomed'

export interface ChatDialogState {
  phoneNumber: string
  notifications: NotificationTransformed[]
}

const initialState: ChatDialogState = {
  phoneNumber: '',
  notifications: []
}

const authSlice = createSlice({
  name: 'chatDialogState',
  initialState,
  reducers: {
    setPhoneNumber(state, { payload }: PayloadAction<string>) {
      state.phoneNumber = payload
    },
    setNotification(state, { payload }: PayloadAction<NotificationTransformed>) {
      state.notifications.push(payload)
    }
  }
})

export const reducer = authSlice.reducer
export const actions = authSlice.actions
