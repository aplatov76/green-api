import { AuthPage } from '@/pages/AuthPage'
import { ChatPage } from '@/pages/ChatPage'
import { type RouteProps } from 'react-router'
import { AppRoutes } from '@/shared/consts/routes'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const getRouteAuth = () => '/auth'
export const getRouteChat = () => '/'

export const routeConfig: Record<keyof typeof AppRoutes, AppRoutesProps> = {
  [AppRoutes.auth]: {
    path: getRouteAuth(),
    element: <AuthPage />
  },
  [AppRoutes.chat]: {
    path: getRouteChat(),
    element: <ChatPage />,
    authOnly: true
  }
}
