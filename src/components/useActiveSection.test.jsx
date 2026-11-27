import { render, screen } from '@testing-library/react'
import { activeObserverCount, triggerIntersection } from '../test/intersectionObserver'
import { useActiveSection } from './useActiveSection'

const IDS = ['profil', 'projets', 'contact']

/** Minimal page: three sections, and a paragraph showing the active id. */
function TestPage() {
	const activeId = useActiveSection(IDS)
	return (
		<>
			<p data-testid="active">{activeId ?? 'none'}</p>
			{IDS.map((id) => (
				<section key={id} id={id} />
			))}
		</>
	)
}

describe('useActiveSection', () => {
	it('has no active section before any intersection', () => {
		render(<TestPage />)
		expect(screen.getByTestId('active')).toHaveTextContent('none')
	})

	// TODO(human): write the tests for the behavior you chose.
	// Tools available:
	// - render(<TestPage />) mounts the page; the returned `unmount()` removes it
	// - triggerIntersection([{ id: 'projets', isIntersecting: true }]) simulates the browser
	// - activeObserverCount() tells how many observers are still connected
	it.todo('marks a section as active when it enters the zone')
	it.todo('disconnects the observer when the component unmounts')
	// Add the cases you identified: two sections at once, a section leaving the zone...
})
