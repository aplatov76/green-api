import { useState } from 'react'
import { AuthActions } from '..'
import { AuthFormData } from '../types'
import { useAppDispatch } from '/src/shared/hooks/useAppDispatch'
import { useNavigate } from 'react-router'
import { getRouteChat } from '/src/app/providers/router/config/routeConfig'

export const useAuthForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const toChatPath = getRouteChat()

  const [formData, setFormData] = useState<AuthFormData>({
    idInstance: '',
    apiTokenInstance: ''
  })

  const onChange = (key: keyof AuthFormData) => (val: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: val
    }))
  }

  const onSubmit = () => {
    dispatch(AuthActions.setAuthData(formData))
    navigate(toChatPath)
  }

  const isDisabled = !formData.idInstance || !formData.apiTokenInstance

  return { onSubmit, onChange, formData, isDisabled }
}
