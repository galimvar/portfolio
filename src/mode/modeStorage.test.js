import { MODES } from './modes'
import { getInitialMode, saveMode } from './modeStorage'

describe('modeStorage', () => {
	beforeEach(() => localStorage.clear())
	afterEach(() => vi.restoreAllMocks())

	it('returns the adventure mode on a first visit', () => {
		const mode = getInitialMode()
		expect(mode).toBe(MODES.ADVENTURE)
	})

	it('returns the mode saved during a previous visit', () => {
		saveMode('direct')
		const mode = getInitialMode()
		expect(mode).toBe(MODES.DIRECT)
	})

	it('returns "aventure" if mode is not valid', () => {
		localStorage.setItem('mode', 'banana')
		const mode = getInitialMode()
		expect(mode).toBe(MODES.ADVENTURE)
	})

	it('falls back to the default mode when storage is unavailable', () => {
		vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
			throw new Error('blocked')
		})
		const mode = getInitialMode()
		expect(mode).toBe(MODES.ADVENTURE)
	})

	it('never throws, whatever the environment', () => {
		expect(() => getInitialMode()).not.toThrow()
		expect(() => saveMode('direct')).not.toThrow()
	})
})
