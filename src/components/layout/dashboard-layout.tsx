'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { useThemeStore } from '@/store/theme-store'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession()
  const { sidebarCollapsed } = useThemeStore()

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Sidebar />
      <Header />
      <main
        className={`pt-16 min-h-screen transition-all duration-200 ${
          sidebarCollapsed ? 'pl-20' : 'pl-[260px]'
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
