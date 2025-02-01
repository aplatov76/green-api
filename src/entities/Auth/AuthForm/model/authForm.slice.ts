import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { AuthSliceState } from '../types'

const initialState: AuthSliceState = {
  idInstance: '',
  apiTokenInstance: ''
}

const authSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<AuthSliceState>) {
      state.apiTokenInstance = payload.apiTokenInstance
      state.idInstance = payload.idInstance
    }
  }
})

export const reducer = authSlice.reducer
export const actions = authSlice.actions
