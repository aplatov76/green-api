import { type ButtonHTMLAttributes, type ReactNode, memo } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export const ThemeButton = {
  primary: 'primary'
} as const

type ThemeButtonType = keyof typeof ThemeButton

export const ButtonSize = {
  size_m: 'size_m',
  size_l: 'size_l',
  size_xl: 'size_xl'
} as const

type ThemeButtonSize = keyof typeof ButtonSize

type ButtonProps = {
  className?: string
  children: ReactNode
  theme?: ThemeButtonType
  size?: ThemeButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo((props: ButtonProps) => {
  const { className, children, theme = ThemeButton.primary, ...otherProps } = props

  return (
    <button type="button" className={clsx(className, styles[theme], styles.btn)} {...otherProps}>
      {children}
    </button>
  )
})
