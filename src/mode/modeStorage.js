import { DEFAULT_MODE, isValidMode } from './modes'

/**
 * Returns the visit mode to display when the app starts.
 *
 * @returns {'aventure' | 'direct'}
 */
export function getInitialMode() {
	try {
		const savedChoice = localStorage.getItem('mode')
		if (isValidMode(savedChoice)) {
			return savedChoice
		}
	} catch {}
	return DEFAULT_MODE
}

/**
 * Remembers the visitor's choice for their next visit.
 *
 * @param {'aventure' | 'direct'} mode
 */
export function saveMode(mode) {
	try {
		if (isValidMode(mode)) {
			localStorage.setItem('mode', mode)
		}
	} catch {}
}
