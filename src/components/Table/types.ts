import { ReactNode } from 'react'

export type Columns<T> = Array<{
  key?: string
  dataIndex?: keyof T extends string ? keyof T : string
  title?: string
  render?: (row: T) => ReactNode
}>

export type Props<T> = {
  columns: Columns<T>
  data: Array<T>
  keyField?: string
}
