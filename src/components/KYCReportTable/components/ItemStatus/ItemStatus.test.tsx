import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { ItemStatus } from './index'
import { Status } from '@/types'

function testStatus(status: Status): void {
  const toCheck = status.toLowerCase()
  render(<ItemStatus status={status} />)
  expect(screen.getByText(toCheck)).toBeTruthy()
  expect(screen.getByTestId(toCheck)).toBeTruthy()
}

describe('<ItemStatus />', () => {
  test('Render approved status', () => {
    testStatus(Status.APPROVED)
  })

  test('Render cancelled status', () => {
    testStatus(Status.CANCELLED)
  })

  test('Render processing status', () => {
    testStatus(Status.PROCESSING)
  })

  test('Render ready status', () => {
    testStatus(Status.READY)
  })

  test('Render rejected status', () => {
    testStatus(Status.REJECTED)
  })
})
