import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { DescriptionCell } from './index'

describe('<DescriptionCell />', () => {
  test("It's render", () => {
    const title = 'Some title'
    const subtitle = 'Some subtitle'
    render(<DescriptionCell title={title} subtitle={subtitle} />)
    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByText(subtitle)).toBeTruthy()
  })
})
