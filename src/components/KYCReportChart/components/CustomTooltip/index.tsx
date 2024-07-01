import { ReactNode } from 'react'
import { TooltipProps } from 'recharts'
import {
  NameType,
  ValueType
} from 'recharts/types/component/DefaultTooltipContent'
import { css } from '@/styled-system/css'

import { Typography as T } from '@/components/Typography'

export function CustomTooltip({
  active,
  payload,
  label
}: TooltipProps<ValueType, NameType>): ReactNode {
  if (active && payload && payload.length) {
    return (
      <div
        className={css({ bg: 'background', p: 1, fontSize: 'sm' })}
        data-testid="custom-tooltip-wrapper"
      >
        <T.Text>{`${label}: ${payload[0].value}`}</T.Text>
      </div>
    )
  }

  return null
}
