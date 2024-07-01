import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { CustomTooltip } from './index'

describe('<CustomTooltip />', () => {
  test("It's render when is active and has payload", () => {
    const active = true
    const label = 'Some label'
    const payload = [{ value: 30 }]
    render(<CustomTooltip active={active} label={label} payload={payload} />)

    const toFind = `${label}: ${payload[0].value}`
    expect(screen.getByText(toFind)).toBeTruthy()
  })

  test('Skip render when is not active', async () => {
    const active = false
    const label = 'Some label'
    const payload = [{ value: 30 }]
    render(<CustomTooltip active={active} label={label} payload={payload} />)

    expect(screen.queryByTestId('custom-tooltip-wrapper')).toBeNull()
  })

  test('Skip render when payload is empty', () => {
    const active = true
    const label = 'Some label'
    const payload = undefined
    render(<CustomTooltip active={active} label={label} payload={payload} />)

    expect(screen.queryByTestId('custom-tooltip-wrapper')).toBeNull()
  })

  test('Skip render when payload is empty and is not active', () => {
    const active = false
    const label = 'Some label'
    const payload = undefined
    render(<CustomTooltip active={active} label={label} payload={payload} />)

    expect(screen.queryByTestId('custom-tooltip-wrapper')).toBeNull()
  })
})
