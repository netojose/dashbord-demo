import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { Loader } from './index'

describe('<Loader />', () => {
  test("It's render", () => {
    render(<Loader height={300} />)
    expect(screen.getByText('Loading...')).toBeTruthy()
  })
})
