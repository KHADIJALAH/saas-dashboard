'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch, FiBell, FiSun, FiMoon, FiUser, FiSettings, FiLogOut } from 'react-icons/fi'
import { useThemeStore } from '@/store/theme-store'
import { useNotificationStore } from '@/store/notification-store'
import { Avatar } from '@/components/ui/avatar'
import { Dropdown, DropdownItem, DropdownDivider } from '@/components/ui/dropdown'
import { getRelativeTime } from '@/lib/utils'
import Link from 'next/link'

interface User {
  name: string
  email: string
  role: string
}

export function Header() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])
  const { theme, toggleTheme, sidebarCollapsed } = useThemeStore()
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const unreadNotifications = notifications.filter((n) => !n.read).slice(0, 5)

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border z-30 flex items-center justify-between px-6 transition-all duration-200 ${
        sidebarCollapsed ? 'left-20' : 'left-[260px]'
      }`}
    >
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-dark-bg border border-transparent rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-dark-card focus:border-gray-300 dark:focus:border-gray-600 transition-all"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'light' ? (
            <FiMoon className="w-5 h-5" />
          ) : (
            <FiSun className="w-5 h-5" />
          )}
        </button>

        {/* Notifications */}
        <Dropdown
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
          align="right"
          className="w-80"
          trigger={
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FiBell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
          }
        >
          <div className="p-3 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
              >
                Mark all as read
              </button>
            )}
          </div>
          <div className="max-h-80 overflow-y-auto">
            {unreadNotifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No new notifications
              </div>
            ) : (
              unreadNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 mt-2 rounded-full ${
                        notification.type === 'error'
                          ? 'bg-red-500'
                          : notification.type === 'warning'
                          ? 'bg-yellow-500'
                          : notification.type === 'success'
                          ? 'bg-green-500'
                          : 'bg-blue-500'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {getRelativeTime(notification.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-2 border-t border-gray-200 dark:border-dark-border">
            <Link
              href="/dashboard/notifications"
              className="block text-center text-sm text-primary-600 dark:text-primary-400 hover:underline py-1"
            >
              View all notifications
            </Link>
          </div>
        </Dropdown>

        {/* Profile Dropdown */}
        <Dropdown
          isOpen={showProfile}
          onClose={() => setShowProfile(false)}
          align="right"
          trigger={
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Avatar
                name={user?.name || 'User'}
                size="sm"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.role || 'User'}
                </p>
              </div>
            </button>
          }
        >
          <div className="p-3 border-b border-gray-200 dark:border-dark-border">
            <p className="font-medium text-gray-900 dark:text-white">
              {user?.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>
          <div className="py-1">
            <DropdownItem
              icon={<FiUser />}
              onClick={() => setShowProfile(false)}
            >
              <Link href="/dashboard/profile">Profile</Link>
            </DropdownItem>
            <DropdownItem
              icon={<FiSettings />}
              onClick={() => setShowProfile(false)}
            >
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownItem>
          </div>
          <DropdownDivider />
          <div className="py-1">
            <DropdownItem
              icon={<FiLogOut />}
              danger
              onClick={() => {
                localStorage.removeItem('user')
                localStorage.removeItem('isAuthenticated')
                router.push('/login')
              }}
            >
              Logout
            </DropdownItem>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}
