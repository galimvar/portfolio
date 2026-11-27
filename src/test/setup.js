import * as matchers from '@testing-library/jest-dom/matchers'
import { afterEach, expect, vi } from 'vitest'
import { MockIntersectionObserver, resetObservers } from './intersectionObserver'

// Register jest-dom matchers (toBeInTheDocument, toHaveTextContent...) explicitly
expect.extend(matchers)

// jsdom does not implement scrolling: stub it so components that scroll can be tested
window.scrollTo = vi.fn()
Element.prototype.scrollIntoView = vi.fn()

// jsdom has no layout engine, hence no IntersectionObserver: use a controllable fake
window.IntersectionObserver = MockIntersectionObserver
afterEach(() => resetObservers())
