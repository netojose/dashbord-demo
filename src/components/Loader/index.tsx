import { ReactElement } from 'react'

import { Typography as T } from '@/components/Typography'
import { css } from '@/styled-system/css'

import { Props } from './types'

export function Loader({ height }: Props): ReactElement {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300
      })}
      style={{ height }}
    >
      <T.Text>Loading...</T.Text>
    </div>
  )
}
