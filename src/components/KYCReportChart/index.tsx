import { ReactNode, memo } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import { Props } from './types'
import { Status } from '@/types'
import { token } from '@/styled-system/tokens'
import { CustomTooltip } from './components/CustomTooltip'

const chartMeta = {
  [Status.APPROVED]: {
    color: token('colors.kycStatus.APPROVED'),
    label: 'Approved'
  },
  [Status.REJECTED]: {
    color: token('colors.kycStatus.REJECTED'),
    label: 'Rejected'
  },
  [Status.CANCELLED]: {
    color: token('colors.kycStatus.CANCELLED'),
    label: 'Cancelled'
  },
  [Status.READY]: { color: token('colors.kycStatus.READY'), label: 'Ready' },
  [Status.PROCESSING]: {
    color: token('colors.kycStatus.PROCESSING'),
    label: 'Processing'
  }
}

const KYCReportChart = memo(function KYCReportChart({
  data
}: Props): ReactNode {
  const totals = data.reduce(
    (acc, row) => ({ ...acc, [row.status]: acc[row.status] + 1 }),
    {
      [Status.APPROVED]: 0,
      [Status.REJECTED]: 0,
      [Status.CANCELLED]: 0,
      [Status.READY]: 0,
      [Status.PROCESSING]: 0
    }
  )

  const chartData = (Object.keys(totals) as Array<Status>).map((key) => ({
    name: chartMeta[key].label,
    value: totals[key],
    fill: chartMeta[key].color
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  )
})

export default KYCReportChart
