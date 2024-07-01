import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { Table, ColumnModel } from './index'

type TData = { id: number; name: string }

const columns: ColumnModel<TData> = [
  { title: 'Id', key: 'id', dataIndex: 'id' },
  { title: 'Name', key: 'name', dataIndex: 'name' }
]

describe('<Table />', () => {
  test("It's render", () => {
    render(<Table columns={[]} data={[]} />)
    expect(screen.getAllByTestId('table')).toBeTruthy()
  })

  test('Render columns', () => {
    render(<Table columns={columns} data={[]} />)
    expect(screen.getByText(columns[0].title!)).toBeTruthy()
    expect(screen.getByText(columns[1].title!)).toBeTruthy()
  })

  test('Render data', () => {
    const data: Array<TData> = [
      { id: 1, name: 'José' },
      { id: 2, name: 'Paul' },
      { id: 3, name: 'Edward' }
    ]
    render(<Table<TData> columns={columns} data={data} />)
    expect(screen.getByText(data[0].name)).toBeTruthy()
    expect(screen.getByText(data[1].name!)).toBeTruthy()
    expect(screen.getByText(data[2].name!)).toBeTruthy()
    expect(screen.getAllByTestId('table-row')).toHaveLength(data.length)
  })

  test('Check custom rendering', () => {
    const data: Array<TData> = [{ id: 1, name: 'José' }]
    const improvedColumns = [
      columns[0],
      {
        ...columns[1],
        dataIndex: undefined,
        render: (row: TData): string => row.name.split('').reverse().join('')
      }
    ]
    render(<Table<TData> columns={improvedColumns} data={data} />)
    expect(
      screen.getByText(data[0].name.split('').reverse().join(''))
    ).toBeTruthy()
  })
})
