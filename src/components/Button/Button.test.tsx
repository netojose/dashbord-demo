import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'

import { Button } from './index'

describe('<Button />', () => {
  test("It's render", () => {
    const btnText = 'Button content'
    render(<Button>{btnText}</Button>)
    expect(screen.getByText(btnText)).toBeTruthy()
  })

  test('Has aria-label attribute', () => {
    const ariaLabelText = 'Label here'
    render(<Button ariaLabel={ariaLabelText}>Some content</Button>)
    expect(
      screen.getByLabelText(ariaLabelText, { selector: 'button' })
    ).toBeTruthy()
  })

  test('Click event is triggered', async () => {
    const mock = vi.fn()
    const btnText = 'Click me'
    render(<Button onClick={mock}>{btnText}</Button>)
    await userEvent.click(screen.getByText(btnText))
    expect(mock).toHaveBeenCalledTimes(1)
  })
})
