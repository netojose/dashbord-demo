import { ReactElement } from 'react'

import { css } from '@/styled-system/css'

import { Props } from './types'

export function Button({ children, ariaLabel, onClick }: Props): ReactElement {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={css({ _hover: { cursor: 'pointer' } })}
    >
      {children}
    </button>
  )
}
