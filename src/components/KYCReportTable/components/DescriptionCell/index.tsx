import { ReactElement } from 'react'

import { css } from '@/styled-system/css'

import { Typography as T } from '@/components/Typography'

import { Props } from './types'

export function DescriptionCell({ title, subtitle }: Props): ReactElement {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <T.Text bold color={200}>
        {title}
      </T.Text>
      <T.Text>{subtitle}</T.Text>
    </div>
  )
}
