import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { App } from './index'

describe('<App />', () => {
  test("It's render", () => {
    render(<App />)
    expect(screen.getByText('Dashboard')).toBeTruthy()
  })
})
