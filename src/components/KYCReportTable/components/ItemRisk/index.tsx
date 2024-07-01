import { ReactElement, ReactNode } from 'react'

import {
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationCircle
} from 'react-icons/fa'

import { css } from '@/styled-system/css'

import { Badge } from '@/components/Badge'
import { Typography as T } from '@/components/Typography'

import { Props } from './types'
import { RiskScore } from '@/types'

export function ItemRisk({ risk }: Props): ReactElement {
  return (
    <span className={css({ display: 'flex', alignItems: 'center', gap: 2 })}>
      {((): ReactNode => {
        switch (risk) {
          case RiskScore.HIGH:
            return <FaExclamationCircle data-testid="high-risk" />
          case RiskScore.MEDIUM:
            return <FaInfoCircle data-testid="medium-risk" />
          case RiskScore.LOW:
            return <FaCheckCircle data-testid="low-risk" />
          default:
            return null
        }
      })()}
      {risk ? (
        <Badge
          danger={risk === RiskScore.HIGH}
          warning={risk === RiskScore.MEDIUM}
          success={risk === RiskScore.LOW}
          value={risk}
        />
      ) : (
        <T.Text>Not calculated</T.Text>
      )}
    </span>
  )
}
