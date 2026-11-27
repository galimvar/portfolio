import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { ModeProvider } from '../mode/ModeContext'

/** Renders the whole app at a given URL, with every provider it needs. */
export function renderApp(url = '/') {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <ModeProvider>
        <App />
      </ModeProvider>
    </MemoryRouter>,
  )
}
