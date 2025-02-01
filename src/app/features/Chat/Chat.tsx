import { FC } from 'react'

import CreateDialog from '@/entities/Chat/ui/CreateDialog/CreateDialog'
import { Dialog } from '@/entities/Chat/ui/Dialog/Dialog'
import { SendMessage } from '/src/entities/Chat/ui/SendMessage/SendMessage'

import styles from './Chat.module.scss'

export const Chat: FC = () => {
  return (
    <div className={styles.wrapper}>
      <CreateDialog />
      <Dialog />
      <SendMessage />
    </div>
  )
}
