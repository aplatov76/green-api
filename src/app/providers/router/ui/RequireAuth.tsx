import { Navigate, useLocation } from 'react-router'
import { getRouteAuth } from '../config/routeConfig'
import { getAuthDataSelector } from '/src/entities/Auth/AuthForm'
import { useAppSelector } from '/src/shared/hooks/useAppDispatch'

interface RequireAuthProps {
  children: JSX.Element
  isAuthRequired: boolean
}

export const RequireAuth = ({ children, isAuthRequired }: RequireAuthProps) => {
  const auth = useAppSelector(getAuthDataSelector)

  const isAuth = Boolean(auth.apiTokenInstance) && Boolean(auth.idInstance)

  const location = useLocation()

  if (isAuthRequired && isAuth) {
    return children
  }

  return <Navigate to={getRouteAuth()} state={{ from: location }} replace />
}
