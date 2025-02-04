import { FC, useState, memo } from 'react'

import styles from './CreateDialog.module.scss'
import { Button, Input } from '/src/shared/ui'
import { useAppDispatch } from '/src/shared/hooks/useAppDispatch'
import { actions } from '../../model/chat.slice'

const CreateDialog: FC = () => {
  const dispatch = useAppDispatch()
  const [currentNumberCompanion, setCurrentNumberCompanion] = useState('')

  const onSubmit = () => {
    dispatch(actions.setPhoneNumber(currentNumberCompanion))
  }

  return (
    <div className={styles.wrapper}>
      <Input
        onChange={setCurrentNumberCompanion}
        placeholder="Формат ввода номера 79116770000"
        className={styles.input}
      />
      <Button onClick={onSubmit}>Start</Button>
    </div>
  )
}

export default memo(CreateDialog)
