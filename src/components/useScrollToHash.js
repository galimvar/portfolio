import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router changes the URL hash (/#projets) without scrolling to it.
 * This hook scrolls to the matching element, or to the top on a new page.
 */
export function useScrollToHash() {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		if (!hash) {
			window.scrollTo(0, 0)
			return
		}
		const target = document.getElementById(decodeURIComponent(hash.slice(1)))
		target?.scrollIntoView()
	}, [pathname, hash])
}
