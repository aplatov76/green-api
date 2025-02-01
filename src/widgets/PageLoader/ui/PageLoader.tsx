import { Spinner } from '@/shared/ui/Spinner'

import clsx from 'clsx'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={clsx(cls.PageLoader, className)}>
      <Spinner />
    </div>
  )
}
