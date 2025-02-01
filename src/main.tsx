import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

import { BrowserRouter } from 'react-router'
//import { PageLoader } from './widgets/PageLoader'
import { AppRouter } from './app/providers/router'
import { StoreProvider } from './app'
import { Layout } from './widgets'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
)
