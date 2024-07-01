import { ReactElement } from 'react'

import { Table, ColumnModel } from '@/components/Table'
import { KYCReportItem } from '@/types'
import { Props } from './types'
import { ItemCreated } from './components/ItemCreated'
import { ItemName } from './components/ItemName'
import { ItemRisk } from './components/ItemRisk'
import { ItemStatus } from './components/ItemStatus'
import { ItemOptions } from './components/ItemOptions'

export function KYCReportTable({ data }: Props): ReactElement {
  const columns: ColumnModel<KYCReportItem> = [
    {
      key: 'created',
      title: 'Created',
      render: ItemCreated
    },
    {
      key: 'name',
      title: 'Name',
      render: ItemName
    },
    { dataIndex: 'type', title: 'Type' },
    {
      key: 'risk',
      title: 'Risk Score',
      render: ItemRisk
    },
    {
      key: 'status',
      title: 'Status',
      render: ItemStatus
    },
    { key: 'options', render: ItemOptions }
  ]

  return <Table<KYCReportItem> columns={columns} data={data} />
}
