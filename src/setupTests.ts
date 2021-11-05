import 'isomorphic-fetch'
import '@testing-library/jest-dom'
import { server } from './tests/api-mocks'

jest.setTimeout(10000)
// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
