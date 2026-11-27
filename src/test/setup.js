import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, vi } from 'vitest'

// Register jest-dom matchers (toBeInTheDocument, toHaveTextContent...) explicitly
expect.extend(matchers)

// jsdom does not implement scrolling: stub it so components that scroll can be tested
window.scrollTo = vi.fn()
Element.prototype.scrollIntoView = vi.fn()
