import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import KYCReportChart from './index'
import { RiskScore, Status } from '@/types'

describe('<KYCReportChart />', () => {
  test("It's render", () => {
    render(
      <KYCReportChart
        data={[
          {
            id: 1,
            created: '2024-06-30T18:16:37',
            name: 'José Neto',
            email: 'contact@joseneto.dev',
            risk: RiskScore.HIGH,
            status: Status.APPROVED,
            type: 'Candidate'
          }
        ]}
      />
    )
    expect(screen.getByText('Approved')).toBeTruthy()
    expect(screen.getByText('Rejected')).toBeTruthy()
    expect(screen.getByText('Cancelled')).toBeTruthy()
  })
})
