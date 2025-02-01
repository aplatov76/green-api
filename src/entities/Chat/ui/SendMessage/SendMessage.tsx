import { FC } from 'react'

import styles from './SendMessage.module.scss'
import { Button, Input } from '@/shared/ui'
import { useSendMessage } from './useSendMessage'

type Props = {
  className?: string
}

export const SendMessage: FC<Props> = () => {
  const { message, setMessage, onSubmit, isDisabled } = useSendMessage()

  return (
    <div className={styles.wrapper}>
      <Input onChange={setMessage} value={message} className={styles.input} />
      <Button onClick={onSubmit} disabled={isDisabled}>
        Send
      </Button>
    </div>
  )
}
