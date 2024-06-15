'use client'
import { DashboardNavbar } from '@/app/dashboard/navbar'
import { isSidebarCollapsed } from '@/context/SidebarStore'
import { useStore } from '@nanostores/react'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { DashboardSidebar } from '../shared/Sidebar/DashboardSidebar'

interface props {
  children?: React.ReactNode
}

const DashboardLayoutContent: FC<props> = ({ children }) => {
  const $sidebarState = useStore(isSidebarCollapsed)
  return (
    <>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <div
          id="main-content"
          className={twMerge(
            'relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900',
            $sidebarState ? 'lg:ml-[4.5rem]' : 'lg:ml-64',
          )}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default DashboardLayoutContent
