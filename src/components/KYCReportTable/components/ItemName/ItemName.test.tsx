import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { ItemName } from './index'

describe('<ItemName />', () => {
  test("It's render", () => {
    const name = 'José Neto'
    const email = 'contact@joseneto.dev'
    render(<ItemName name={name} email={email} />)
    expect(screen.getByText(name)).toBeTruthy()
    expect(screen.getByText(email)).toBeTruthy()
  })
})
