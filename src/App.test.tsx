import * as React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

const queryClient = new QueryClient()
const Wrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

it('renders the "User" component', async () => {
  render(
    <Wrapper>
      <App />
    </Wrapper>
  )
  await waitFor(() => screen.getByText('Users'))

  expect(screen.getByText('Users')).toBeInTheDocument()
  expect(screen.getByTestId('user-list')).toBeInTheDocument()
})
