import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getInitialMode, saveMode } from './modeStorage'
import { MODES } from './modes'

const ModeContext = createContext(null)

export function ModeProvider({ children }) {
	// Lazy initializer: getInitialMode runs once, on the first render only
	const [mode, setMode] = useState(getInitialMode)

	useEffect(() => {
		saveMode(mode)
		// Exposes the mode to CSS: [data-mode='aventure'] { ... }
		document.documentElement.dataset.mode = mode
	}, [mode])

	const toggleMode = useCallback(() => {
		setMode((current) => (current === MODES.ADVENTURE ? MODES.DIRECT : MODES.ADVENTURE))
	}, [])

	const value = useMemo(
		() => ({ mode, setMode, toggleMode, isAdventure: mode === MODES.ADVENTURE }),
		[mode, toggleMode],
	)

	return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export function useMode() {
	const context = useContext(ModeContext)
	if (!context) {
		throw new Error('useMode must be used inside <ModeProvider>')
	}
	return context
}
