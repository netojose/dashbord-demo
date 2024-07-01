import { ReactElement } from 'react'

import { css } from '@/styled-system/css'

import { TitleProps } from './types'

export function Title({ children }: TitleProps): ReactElement {
  return (
    <h1
      className={css({
        fontSize: 'lg',
        fontWeight: 'bold',
        py: 3,
        color: 'text.300'
      })}
    >
      {children}
    </h1>
  )
}
