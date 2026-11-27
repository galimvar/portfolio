import { getInitialMode, saveMode } from './modeStorage'

describe('modeStorage', () => {
  // TODO(human): turn these into real tests, then add the edge cases you identified
  // while writing getInitialMode() and saveMode().
  it.todo('returns the adventure mode on a first visit')
  it.todo('returns the mode saved during a previous visit')

  it('never throws, whatever the environment', () => {
    expect(() => getInitialMode()).not.toThrow()
    expect(() => saveMode('direct')).not.toThrow()
  })
})
