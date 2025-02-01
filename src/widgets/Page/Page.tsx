import { FC, PropsWithChildren } from 'react'
import styles from './Page.module.scss'

type Props = {
  className?: string
}

export const Page: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
