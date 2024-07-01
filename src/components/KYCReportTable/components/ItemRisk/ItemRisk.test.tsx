import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { ItemRisk } from './index'
import { RiskScore } from '@/types'

function testRisk(risk: RiskScore): void {
  render(<ItemRisk risk={risk} />)
  expect(screen.getByText(risk)).toBeTruthy()
  expect(screen.getByTestId(`${risk.toLowerCase()}-risk`)).toBeTruthy()
}

describe('<ItemRisk />', () => {
  test('Render hight risk', () => {
    testRisk(RiskScore.HIGH)
  })

  test('Render hightmedium risk', () => {
    testRisk(RiskScore.MEDIUM)
  })

  test('Render low riskk', () => {
    testRisk(RiskScore.LOW)
  })

  test('Render no risk', () => {
    render(<ItemRisk risk={undefined} />)
    expect(screen.getByText('Not calculated')).toBeTruthy()
    expect(screen.queryByTestId('high-risk')).toBeNull()
    expect(screen.queryByTestId('medium-risk')).toBeNull()
    expect(screen.queryByTestId('low-risk')).toBeNull()
  })
})
