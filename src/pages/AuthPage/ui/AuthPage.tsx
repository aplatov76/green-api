import { Page } from '@/widgets'
import { FC } from 'react'
import { AuthForm } from '/src/entities'

const AuthPage: FC = () => {
  return (
    <Page>
      <AuthForm />
    </Page>
  )
}

export default AuthPage
