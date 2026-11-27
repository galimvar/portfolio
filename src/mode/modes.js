export const MODES = Object.freeze({
  ADVENTURE: 'aventure',
  DIRECT: 'direct',
})

/** Mode shown on a first visit (docs/design.md: adventure is the default). */
export const DEFAULT_MODE = MODES.ADVENTURE

export function isValidMode(value) {
  return Object.values(MODES).includes(value)
}
