import { render, screen } from '@testing-library/react'
import { activeObserverCount, triggerIntersection } from '../test/intersectionObserver'
import { useActiveSection } from './useActiveSection'

/*
 * How these tests work
 * --------------------
 * In a real browser, IntersectionObserver watches the page while the user scrolls,
 * and calls our callback with "entries": one per section whose visibility CHANGED.
 *
 * jsdom (the fake browser used by Vitest) has no screen and no layout, so nothing
 * would ever be reported. src/test/setup.js replaces IntersectionObserver with a fake,
 * and `triggerIntersection` lets us play the browser's role:
 *
 *   triggerIntersection([{ id: 'projets', isIntersecting: true }])
 *   // = "the browser reports that #projets just ENTERED the observed band"
 *
 * Each test then reads the hook's result, displayed in <p data-testid="active">.
 */

const IDS = ['profil', 'projets', 'contact']

/** Minimal page: the observed sections, plus a paragraph showing the active id. */
function TestPage({ ids = IDS }) {
	const activeId = useActiveSection(ids)
	return (
		<>
			<p data-testid="active">{activeId ?? 'none'}</p>
			{/* Only the sections of IDS exist in the page, whatever `ids` contains */}
			{IDS.map((id) => (
				<section key={id} id={id} />
			))}
		</>
	)
}

/** Reads the id currently displayed as active. */
const activeText = () => screen.getByTestId('active').textContent

describe('useActiveSection', () => {
	it('has no active section before any intersection', () => {
		render(<TestPage />)
		expect(activeText()).toBe('none')
	})

	it('marks a section as active when it enters the zone', () => {
		render(<TestPage />)

		triggerIntersection([{ id: 'projets', isIntersecting: true }])

		expect(activeText()).toBe('projets')
	})

	it('picks the entering section when another one leaves at the same time', () => {
		// Scrolling down: #profil leaves the band while #projets enters it.
		// The browser reports BOTH changes in a single callback call.
		render(<TestPage />)
		triggerIntersection([{ id: 'profil', isIntersecting: true }])

		triggerIntersection([
			{ id: 'profil', isIntersecting: false },
			{ id: 'projets', isIntersecting: true },
		])

		expect(activeText()).toBe('projets')
	})

	it('keeps the last active section when it leaves and nothing enters yet', () => {
		// Between two sections, the band can be empty for a moment.
		// Resetting to "none" would make the underline blink: we keep the last one.
		render(<TestPage />)
		triggerIntersection([{ id: 'projets', isIntersecting: true }])

		triggerIntersection([{ id: 'projets', isIntersecting: false }])

		expect(activeText()).toBe('projets')
	})

	it('follows the visitor when scrolling back up', () => {
		render(<TestPage />)
		triggerIntersection([{ id: 'contact', isIntersecting: true }])

		triggerIntersection([
			{ id: 'contact', isIntersecting: false },
			{ id: 'profil', isIntersecting: true },
		])

		expect(activeText()).toBe('profil')
	})

	it('ignores ids that have no matching section in the page', () => {
		// Same situation as the header on /projets/:slug, where home sections don't exist.
		// The fake observer throws on observe(null), like real browsers: rendering must not crash.
		render(<TestPage ids={['profil', 'absent-section']} />)

		triggerIntersection([{ id: 'profil', isIntersecting: true }])

		expect(activeText()).toBe('profil')
	})

	it('disconnects the observer when the component unmounts', () => {
		// Without cleanup, every mount would leave an observer alive, watching
		// sections that no longer exist (a memory leak).
		const { unmount } = render(<TestPage />)
		expect(activeObserverCount()).toBe(1)

		unmount()

		expect(activeObserverCount()).toBe(0)
	})
})
