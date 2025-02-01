import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '/src/app'
import { StateSchema } from '/src/app/providers/store/config/stateSchema'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
