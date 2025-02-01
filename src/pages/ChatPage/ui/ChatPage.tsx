import { FC } from 'react'

import styles from './ChatPage.module.scss'
import { Chat } from '@/app/features/Chat/Chat'

const ChatPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Chat />
      </div>
    </div>
  )
}

export default ChatPage
