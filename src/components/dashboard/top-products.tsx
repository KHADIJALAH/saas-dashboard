'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { topProducts } from '@/data/mock-data'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { FiTrendingUp } from 'react-icons/fi'

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200 dark:divide-dark-border">
          {topProducts.map((product, index) => (
            <div
              key={product.id}
              className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-gray-100 dark:bg-dark-bg rounded-lg flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatNumber(product.sales)} sales
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(product.revenue)}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center justify-end gap-1">
                  <FiTrendingUp className="w-3 h-3" />
                  {product.growth}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
