import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently being read.
 *
 * @param {string[]} sectionIds - ids of the observed sections, in page order.
 *   Must be a stable reference (defined outside the component), otherwise
 *   the effect would restart on every render.
 * @returns {string | null} id of the active section, or null if none is visible
 */
export function useActiveSection(sectionIds) {
	const [activeId, setActiveId] = useState(null)

	useEffect(() => {
		// TODO(human): observe the sections and update activeId.
		//
		// Steps:
		// 1. Find the DOM elements matching sectionIds.
		// 2. Create an IntersectionObserver whose callback updates activeId.
		// 3. Observe each element.
		// 4. Return a cleanup function (what must happen when the component unmounts?).
		//
		// To weigh:
		// - Which "zone" of the screen counts as "being read"? Look at the `rootMargin`
		//   and `threshold` options: a section that just peeks at the bottom of the screen
		//   should probably not be active yet.
		// - The callback only receives the entries that CHANGED, not all sections.
		//   What if two sections are in the zone at the same time?
		// - The header is also displayed on /projets/:slug, where these sections don't exist.
		//
		// Docs: https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
		void setActiveId
	}, [sectionIds])

	return activeId
}
