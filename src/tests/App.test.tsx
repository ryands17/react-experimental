import './api-mocks'
import * as React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

const queryClient = new QueryClient()
const Wrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

test('displays the "user" cards successfully', async () => {
  render(
    <Wrapper>
      <App />
    </Wrapper>
  )

  await waitFor(() => screen.getAllByTestId('user-card'))
  expect(screen.getAllByTestId('user-card').length).toEqual(2)
})
