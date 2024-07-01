import { ReactElement, ReactNode } from 'react'

import { css } from '@/styled-system/css'

import { Typography as T } from '@/components/Typography'

import { Props, Columns } from './types'

export function Table<T extends Record<string, ReactNode>>({
  columns,
  data,
  keyField = 'id'
}: Props<T>): ReactElement {
  return (
    <div className={css({ overflowX: 'auto' })}>
      <table className={css({ w: '100%', bg: 'white' })} data-testid="table">
        <thead>
          <tr>
            {columns.map(({ dataIndex, key, title }) => (
              <th
                key={dataIndex ?? key}
                className={css({ p: 2, textAlign: 'left' })}
              >
                <T.Text color={300}>{title}</T.Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row[keyField] as string}
              data-testid="table-row"
              className={css({
                borderBottomWidth: 1,
                borderBottomColor: 'gray.100',
                transition: 'all',
                transitionDuration: 'normal',
                transitionTimingFunction: 'ease-in-out',
                _hover: {
                  bg: 'gray.100'
                }
              })}
            >
              {columns.map(({ dataIndex, key, render }) => {
                const value = dataIndex ? row[dataIndex] : undefined
                return (
                  <td key={dataIndex ?? key} className={css({ p: 2 })}>
                    {render ? render(row) : <T.Text>{value}</T.Text>}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export type ColumnModel<T> = Columns<T>
