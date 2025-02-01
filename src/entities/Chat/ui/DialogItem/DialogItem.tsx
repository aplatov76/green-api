import { FC } from 'react'

import styles from './DialogItem.module.scss'
import { historyMessageType } from '@/shared/types/api'
import clsx from 'clsx'
import { ChatHistoryTransformed } from '../../types/transfomed'

type Props = {
  data: ChatHistoryTransformed
}

export const DialogItem: FC<Props> = ({ data }) => {
  const isIncoming = data.type === historyMessageType.incoming

  return (
    <div className={clsx(styles.wrapper, isIncoming ? styles.incoming : styles.outcoming)}>
      <div className={styles.message}>{data.textMessage}</div>
      <div className={styles.time}>{data.formattedTime}</div>
    </div>
  )
}
