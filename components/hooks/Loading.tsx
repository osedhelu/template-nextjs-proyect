import { Suspense, useEffect, useState, type FC, type ReactNode } from 'react'

const TemplateSkeleton: FC = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

interface Props {
  templateLoading?: ReactNode
  children: ReactNode
}

export const Loading: FC<Props> = ({ children, templateLoading = <TemplateSkeleton /> }) => {
  const [isHydrated, setIsHydrated] = useState(false)
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  return <Suspense fallback={templateLoading}>{isHydrated ? children : templateLoading}</Suspense>
}
