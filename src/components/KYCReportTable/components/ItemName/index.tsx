import { ReactElement } from 'react'

import { Props } from './types'
import { DescriptionCell } from '../DescriptionCell'

export function ItemName({ name, email }: Props): ReactElement {
  return <DescriptionCell title={name} subtitle={email} />
}
