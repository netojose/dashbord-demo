import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { ItemOptions } from './index'

describe('<ItemOptions />', () => {
  test("It's render", () => {
    render(<ItemOptions />)
    expect(
      screen.getByLabelText('Details', { selector: 'button' })
    ).toBeTruthy()
  })
})
