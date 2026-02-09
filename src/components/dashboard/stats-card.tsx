'use client'

import { motion } from 'framer-motion'
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import { cn, formatCurrency, formatNumber } from '@/lib/utils'
import { Card } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: number
  change: number
  icon: React.ReactNode
  format?: 'currency' | 'number' | 'percentage'
  index?: number
}

export function StatsCard({ title, value, change, icon, format = 'number', index = 0 }: StatsCardProps) {
  const isPositive = change >= 0

  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return formatCurrency(val)
      case 'percentage':
        return `${val}%`
      default:
        return formatNumber(val)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatValue(value)}
            </p>
          </div>
          <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl text-primary-600 dark:text-primary-400">
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span
            className={cn(
              'flex items-center text-sm font-medium',
              isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            )}
          >
            {isPositive ? (
              <FiTrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <FiTrendingDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>
    </motion.div>
  )
}
