'use client'
import { useStore } from '@nanostores/react'
import type { FC } from 'react'
import { useEffect } from 'react'
import { HiCheck, HiExclamation, HiInformationCircle, HiX } from 'react-icons/hi'
import { $storeToast, removeOldestToast, removeToastByIndex } from './storeToast'

const typeToast = (status: string) => {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'
    case 'error':
      return 'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200'
    case 'warning':
      return 'bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200'
    case 'info':
      return 'bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200'
    default:
      return ''
  }
}

const IconToast = (status: string): FC<{ className: string }> => {
  switch (status) {
    case 'success':
      return HiCheck
    case 'error':
      return HiX
    case 'warning':
      return HiExclamation
    case 'info':
      return HiInformationCircle
    default:
      return HiInformationCircle
  }
}

export function ToastComponent() {
  const dataToast = useStore($storeToast)

  useEffect(() => {
    const interval = setInterval(() => {
      removeOldestToast()
    }, 30000) // 30 segundos

    return () => clearInterval(interval) // Cleanup al desmontar el componente
  }, [])

  return (
    <div className="fixed end-0 top-0 z-50 flex flex-col gap-4 p-4">
      {dataToast?.map((item, id) => {
        const IconState = IconToast(item.status)
        return (
          <div
            key={id}
            className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
            role="alert"
          >
            <div
              className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg ${typeToast(item.status)}`}
            >
              <IconState className="size-5" />
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{item.text}</div>
            <button
              onClick={() => removeToastByIndex(id)}
              type="button"
              className="-m-1.5 ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="size-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )
      })}
    </div>
  )
}
