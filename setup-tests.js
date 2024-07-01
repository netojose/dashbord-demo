import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

vi.mock('recharts', async (importOriginal) => {
  const original = await importOriginal()

  return {
    ...original,
    ResponsiveContainer: ({ children }) => children
  }
})

afterEach(() => {
  cleanup()
})
