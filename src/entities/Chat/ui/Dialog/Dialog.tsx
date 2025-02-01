import { FC } from 'react'
import styles from './Dialog.module.scss'
import { DialogItem } from '../DialogItem/DialogItem'
import { useDialog } from './useDialog'

export const Dialog: FC = () => {
  const { chatHistory, notifications, chatRef } = useDialog()

  return (
    <div className={styles.wrapper} ref={chatRef}>
      {chatHistory.map((val) => (
        <DialogItem key={val.idMessage} data={val} />
      ))}
      {notifications.map((val) => (
        <DialogItem key={val.idMessage} data={val} />
      ))}
    </div>
  )
}
