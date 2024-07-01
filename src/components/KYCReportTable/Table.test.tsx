import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { KYCReportTable } from './index'

describe('<KYCReportTable />', () => {
  test("It's render", () => {
    render(<KYCReportTable data={[]} />)
    expect(screen.getByTestId('table')).toBeTruthy()
    expect(screen.getByText('Created')).toBeTruthy()
    expect(screen.getByText('Name')).toBeTruthy()
    expect(screen.getByText('Type')).toBeTruthy()
    expect(screen.getByText('Risk Score')).toBeTruthy()
    expect(screen.getByText('Status')).toBeTruthy()
  })
})
