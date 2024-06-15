import DashboardLayoutContent from '@/components/DashBoard/DashboardLayoutContent'
import type { FC, PropsWithChildren } from 'react'
export const metadata = {
  title: 'Fenix -Dashboard',
  description: 'Fenix - Dashboard',
}
const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return <DashboardLayoutContent>{children}</DashboardLayoutContent>
}

export default DashboardLayout
