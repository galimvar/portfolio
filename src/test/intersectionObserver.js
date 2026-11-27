import { act } from '@testing-library/react'

/**
 * jsdom does not implement IntersectionObserver (it has no layout engine).
 * This fake records every observer created, so tests can trigger intersections by hand.
 */
const observers = new Set()

export class MockIntersectionObserver {
	constructor(callback, options = {}) {
		this.callback = callback
		this.options = options
		this.elements = new Set()
		observers.add(this)
	}

	observe(element) {
		this.elements.add(element)
	}

	unobserve(element) {
		this.elements.delete(element)
	}

	disconnect() {
		this.elements.clear()
		observers.delete(this)
	}

	takeRecords() {
		return []
	}
}

/**
 * Simulates the browser reporting that sections entered or left the observed zone.
 *
 * @param {{ id: string, isIntersecting: boolean }[]} changes
 * @example triggerIntersection([{ id: 'profil', isIntersecting: true }])
 */
export function triggerIntersection(changes) {
	act(() => {
		for (const observer of observers) {
			const entries = changes
				.map(({ id, isIntersecting }) => {
					const target = [...observer.elements].find((element) => element.id === id)
					return (
						target && {
							target,
							isIntersecting,
							intersectionRatio: isIntersecting ? 1 : 0,
						}
					)
				})
				.filter(Boolean)
			if (entries.length > 0) observer.callback(entries, observer)
		}
	})
}

/** Number of observers still alive: useful to check that cleanup disconnects them. */
export function activeObserverCount() {
	return observers.size
}

export function resetObservers() {
	observers.clear()
}
