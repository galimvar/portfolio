import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the owner name as main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Rémy Lagarre')
  })
})
