import { ReactElement } from 'react'
import dayjs from 'dayjs'

import { Props } from './types'
import { DescriptionCell } from '../DescriptionCell'

export function ItemCreated({ created }: Props): ReactElement {
  return (
    <DescriptionCell
      title={dayjs(created).format('MMMM DD, YYYY')}
      subtitle={dayjs(created).format('HH:mm:ss')}
    />
  )
}
