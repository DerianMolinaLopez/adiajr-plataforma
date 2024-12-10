import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <ReactQueryDevtools initialIsOpen={false} />
      <Router />
    </QueryClientProvider>
  </StrictMode>,
)
