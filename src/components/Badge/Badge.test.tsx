import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { Badge } from './index'

describe('<Badge />', () => {
  test("It's render", () => {
    const value = 'Badge content'
    render(<Badge value={value} />)
    expect(screen.getByText(value)).toBeTruthy()
  })
})
