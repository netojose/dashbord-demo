import { ReactElement } from 'react'

import { cva } from '@/styled-system/css'

import { TextProps } from './types'

const text = cva({
  base: { color: 'text.100' },
  variants: {
    bold: {
      true: { fontWeight: 'bold' }
    },
    sm: {
      true: { fontSize: 'sm' }
    },
    color: {
      100: { color: 'text.100' },
      200: { color: 'text.200' },
      300: { color: 'text.300' }
    },
    danger: {
      true: { color: 'danger' }
    },
    warning: {
      true: { color: 'warning' }
    },
    success: {
      true: { color: 'success' }
    }
  }
})

export function Text({
  children,
  bold,
  color,
  sm,
  danger,
  warning,
  success
}: TextProps): ReactElement {
  return (
    <span className={text({ bold, color, sm, danger, warning, success })}>
      {children}
    </span>
  )
}
