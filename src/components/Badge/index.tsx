import { ReactElement } from 'react'

import { cva } from '@/styled-system/css'

import { Props } from './types'

const badge = cva({
  base: {
    bg: 'background',
    p: 1,
    borderRadius: 'md',
    lineHeight: 'none',
    fontSize: 'xs'
  },
  variants: {
    danger: {
      true: { bg: 'danger', color: 'white' }
    },
    warning: {
      true: { bg: 'warning' }
    },
    success: {
      true: { bg: 'success', color: 'white' }
    }
  }
})

export function Badge({
  value,
  danger,
  warning,
  success
}: Props): ReactElement {
  return <span className={badge({ danger, warning, success })}>{value}</span>
}
