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
		const options = {
			rootMargin: '-30% 0px -40%',
			threshold: 0,
		}
		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter((element) => element !== null)

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setActiveId(entry.target.id)
				}
			}
		}, options)

		elements.forEach((element) => {
			observer.observe(element)
		})
		return () => observer.disconnect()
	}, [sectionIds])

	return activeId
}
