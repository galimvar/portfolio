import { DEFAULT_MODE } from './modes'

/**
 * Returns the visit mode to display when the app starts.
 *
 * @returns {'aventure' | 'direct'}
 */
export function getInitialMode() {
  // TODO(human): decide where the visitor's choice is read from, and in which order.
  //
  // To weigh:
  // - First visit: no saved choice yet.
  // - Returning visitor: their last choice must win.
  // - What if the stored value is missing, corrupted, or from an older version of the site?
  // - What if the storage itself is unavailable (private browsing, blocked cookies)?
  // - Should a shared link be able to force a mode? (e.g. a recruiter sending the site to a colleague)
  //
  // The app must never crash here: whatever happens, return a valid mode.
  // `isValidMode` in ./modes.js may help.
  return DEFAULT_MODE
}

/**
 * Remembers the visitor's choice for their next visit.
 *
 * @param {'aventure' | 'direct'} mode
 */
export function saveMode(mode) {
  // TODO(human): store the choice so that getInitialMode() can find it again.
  // Same constraint: this must never throw, even if the storage is unavailable.
  void mode
}
