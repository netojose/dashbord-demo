import { ReactElement } from 'react'

import { FaAlignJustify } from 'react-icons/fa'

import { Button } from '@/components/Button'

export function ItemOptions(): ReactElement {
  return (
    <Button ariaLabel="Details">
      <FaAlignJustify />
    </Button>
  )
}
