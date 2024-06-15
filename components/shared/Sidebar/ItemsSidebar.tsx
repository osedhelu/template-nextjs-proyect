'use client'
import { isSidebarCollapsed } from '@/context/SidebarStore'
import { useStore } from '@nanostores/react'
import Link from 'next/link'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
interface Props {
  title: string
  path: string
  Icon: FC<{ className: string }>
}
const ItemsSidebar: FC<Props> = ({ title, path, Icon }) => {
  const $sidebarState = useStore(isSidebarCollapsed)
  return (
    <>
      <li className="w-full">
        <Link
          className={twMerge(
            'flex items-center rounded-lg p-2 text-lg font-normal text-gray-900 no-underline hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
            $sidebarState && 'flex h-full w-full items-center justify-center',
          )}
          href={path}
        >
          <Icon className="size-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {!$sidebarState && (
            <span id="flowbite-sidebar-item-:R9cvacq:" className="flex-1 whitespace-nowrap px-3">
              {title}
            </span>
          )}
        </Link>
      </li>
    </>
  )
}
export default ItemsSidebar
