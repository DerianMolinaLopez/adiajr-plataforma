import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router'
import {QueryClient, QueryClientProvider} from 'react-query'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Router />
    </QueryClientProvider>
  </StrictMode>,
)
