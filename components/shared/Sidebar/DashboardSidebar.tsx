import { isSidebarCollapsed } from '@/context/SidebarStore'
import { useStore } from '@nanostores/react'
import { Sidebar } from 'flowbite-react'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import ItemsSidebar from './ItemsSidebar'
import { MenuData } from './MenuData'

export const DashboardSidebar: FC = function () {
  const isCollapsed = useStore(isSidebarCollapsed)
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        'fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex',
        isCollapsed && 'hidden w-16',
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {MenuData.map((item) => (
            <ItemsSidebar key={item.title} {...item} />
          ))}
        </Sidebar.ItemGroup>
        {/* <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
    </Sidebar>
  )
}
