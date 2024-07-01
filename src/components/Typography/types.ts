type CommonProps = {
  children: React.ReactNode
}

export type TextProps = {
  bold?: boolean
  sm?: boolean
  color?: 100 | 200 | 300
  danger?: boolean
  warning?: boolean
  success?: boolean
} & CommonProps

export type TitleProps = CommonProps
