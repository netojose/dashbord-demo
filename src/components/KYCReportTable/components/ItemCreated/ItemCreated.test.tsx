import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { ItemCreated } from './index'

describe('<ItemCreated />', () => {
  test("It's render", () => {
    const created = '2024-06-30T18:16:37'
    render(<ItemCreated created={created} />)
    expect(screen.getByText('June 30, 2024')).toBeTruthy()
    expect(screen.getByText('18:16:37')).toBeTruthy()
  })
})
