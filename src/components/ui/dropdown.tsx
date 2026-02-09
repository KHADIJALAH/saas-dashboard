'use client'

import { Fragment, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  align?: 'left' | 'right'
  className?: string
}

export function Dropdown({
  trigger,
  children,
  isOpen,
  onClose,
  align = 'right',
  className,
}: DropdownProps) {
  return (
    <div className="relative">
      {trigger}
      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={onClose}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className={cn(
                'absolute z-50 mt-2 min-w-[200px] bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-dark-border overflow-hidden',
                align === 'right' ? 'right-0' : 'left-0',
                className
              )}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

interface DropdownItemProps {
  onClick?: () => void
  children: ReactNode
  icon?: ReactNode
  danger?: boolean
  className?: string
}

export function DropdownItem({
  onClick,
  children,
  icon,
  danger,
  className,
}: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full px-4 py-2.5 text-sm text-left flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors',
        danger
          ? 'text-red-600 dark:text-red-400'
          : 'text-gray-700 dark:text-gray-200',
        className
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  )
}

interface DropdownDividerProps {
  className?: string
}

export function DropdownDivider({ className }: DropdownDividerProps) {
  return (
    <div
      className={cn('border-t border-gray-200 dark:border-dark-border my-1', className)}
    />
  )
}
