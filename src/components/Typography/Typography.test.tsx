import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { Typography as T } from './index'

describe('Typography', () => {
  describe('<Typography.Text />', () => {
    test("It's render", () => {
      const text = 'Some content'
      render(<T.Text>{text}</T.Text>)
      expect(screen.getByText(text)).toBeTruthy()
    })
  })

  describe('<Typography.Title />', () => {
    test("It's render", () => {
      const text = 'Some content'
      render(<T.Title>{text}</T.Title>)
      expect(screen.getByText(text)).toBeTruthy()
    })
  })
})
