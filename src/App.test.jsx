import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderApp } from './test/renderApp'

describe('App', () => {
  it('renders the owner name as main heading on the home page', () => {
    renderApp('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Rémy Lagarre')
  })

  it('renders a not found page for an unknown route', () => {
    renderApp('/nimporte-quoi')
    expect(screen.getByRole('heading', { name: 'Page introuvable' })).toBeInTheDocument()
  })

  it('renders the project page for /projets/:slug', () => {
    renderApp('/projets/adalgo')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('adalgo')
  })
})

describe('Visit mode', () => {
  it('switches the navigation between scene names and classic section names', async () => {
    const user = userEvent.setup()
    renderApp('/')
    const nav = screen.getByRole('navigation', { name: 'Navigation principale' })

    await user.click(screen.getByRole('button', { name: 'Accès direct' }))
    expect(within(nav).getByRole('link', { name: 'Projets' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accès direct' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Mode aventure' }))
    expect(within(nav).getByRole('link', { name: 'Les exploits' })).toBeInTheDocument()
  })
})
