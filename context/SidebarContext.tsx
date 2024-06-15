'use client'
import { isBrowser } from '@/helpers/is-browser'
import { isSmallScreen } from '@/helpers/is-small-screen'
import { useStore } from '@nanostores/react'
import React, { useEffect } from 'react'
import { isSidebarCollapsed, setUpdateState } from './SidebarStore'

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isCollapsed = useStore(isSidebarCollapsed)

  useEffect(() => {
    if (isBrowser()) {
      const storedIsCollapsed = localStorage.getItem('isSidebarCollapsed') === 'true'
      isSidebarCollapsed.set(storedIsCollapsed)
    }
  }, [])

  useEffect(() => {
    if (isSmallScreen()) {
      setUpdateState()
    }
  }, [window.location.pathname])

  useEffect(() => {
    const handleMobileTapInsideMain = (event: MouseEvent) => {
      const main = document.querySelector('#main-content')
      const isClickInsideMain = main?.contains(event.target as Node)

      if (isSmallScreen() && isClickInsideMain) {
        setUpdateState()
      }
    }

    document.addEventListener('mousedown', handleMobileTapInsideMain)

    return () => {
      document.removeEventListener('mousedown', handleMobileTapInsideMain)
    }
  }, [])

  useEffect(() => {
    if (isBrowser()) {
      localStorage.setItem('isSidebarCollapsed', isCollapsed ? 'true' : 'false')
    }
  }, [isCollapsed])

  return <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>{children}</div>
}

export default SidebarProvider
