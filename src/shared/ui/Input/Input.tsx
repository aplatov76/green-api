import React, { memo, useId, type InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: 'text' | 'data' | 'number' | 'password'
  label?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', label, ...otherProps } = props

  const idLabel = useId()

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const isLabel = Boolean(label)

  return (
    <div className={clsx(styles.wrapper, className)}>
      {isLabel && (
        <label htmlFor={idLabel} className={styles.label}>
          {label}
        </label>
      )}
      <input type={type} value={value} onChange={onChangeHandler} name={idLabel} {...otherProps} />
    </div>
  )
})
