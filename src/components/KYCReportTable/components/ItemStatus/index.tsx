import { ReactElement, ReactNode } from 'react'

import {
  FaCheck,
  FaSpinner,
  FaExclamationCircle,
  FaTimesCircle,
  FaCircle
} from 'react-icons/fa'

import { css } from '@/styled-system/css'

import { Typography as T } from '@/components/Typography'

import { Props } from './types'
import { Status } from '@/types'

export function ItemStatus({ status }: Props): ReactElement {
  return (
    <span
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        textTransform: 'capitalize'
      })}
    >
      <T.Text>
        {((): ReactNode => {
          switch (status) {
            case Status.APPROVED:
              return <FaCheck data-testid="approved" />
            case Status.REJECTED:
              return <FaExclamationCircle data-testid="rejected" />
            case Status.CANCELLED:
              return <FaTimesCircle data-testid="cancelled" />
            case Status.READY:
              return <FaCircle data-testid="ready" />
            default:
              return <FaSpinner data-testid="processing" />
          }
        })()}
      </T.Text>
      <T.Text>{status.toLowerCase()}</T.Text>
    </span>
  )
}
