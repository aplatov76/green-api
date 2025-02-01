import { FC } from 'react'
import styles from './AuthForm.module.scss'
import { Button, Input } from '@/shared/ui'
import { useAuthForm } from './useAuthForm'

export const AuthForm: FC = () => {
  const { onSubmit, onChange, formData, isDisabled } = useAuthForm()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Введите учетные данные</h2>
        <p className={styles.warning}>Получать уведомления о входящих сообщениях и файлах: Да</p>
        <p className={styles.warning}>Все остальные значения инстанса, должны быть в статусе Нет</p>

        <Input
          type="text"
          placeholder="idInstance"
          label="Инстанс"
          className={styles.field}
          value={formData.idInstance}
          onChange={onChange('idInstance')}
        />
        <Input
          type="text"
          placeholder="apiTokenInstance"
          label="Токен"
          className={styles.field}
          value={formData.apiTokenInstance}
          onChange={onChange('apiTokenInstance')}
        />

        <div className={styles.actions}>
          <Button theme="primary" onClick={onSubmit} disabled={isDisabled}>
            Открыть чат
          </Button>
        </div>
      </div>
    </div>
  )
}
