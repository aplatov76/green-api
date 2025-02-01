import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

type Props = {
  className?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
