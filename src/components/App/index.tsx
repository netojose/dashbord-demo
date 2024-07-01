import { ReactElement, lazy, Suspense } from 'react'

import { KYCReportTable } from '@/components/KYCReportTable'
import { Typography as T } from '@/components/Typography'
import { Loader } from '@/components/Loader'
import { css } from '@/styled-system/css'
import { data } from '@/data'

const KYCReportChart = lazy(() => import('@/components/KYCReportChart'))

export function App(): ReactElement {
  return (
    <div className={css({ p: 3 })}>
      <T.Title>Dashboard</T.Title>
      <div className={css({ bg: 'white', p: 3, boxShadow: 'lg' })}>
        <T.Title>KYC Application Reports</T.Title>
        <Suspense fallback={<Loader height={300} />}>
          <KYCReportChart data={data} />
        </Suspense>
        <KYCReportTable data={data} />
      </div>
    </div>
  )
}
