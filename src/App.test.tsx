import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('<App>', () => {
  it('renders the "User" component', async () => {
    render(<App />)
    await waitFor(() => screen.getByText('Users'))

    expect(screen.getByText('Users')).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
