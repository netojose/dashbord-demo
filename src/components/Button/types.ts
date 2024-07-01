import { ReactNode, MouseEventHandler } from 'react'

export type Props = {
  children: ReactNode
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
