'use client'

import { FiDollarSign, FiUsers, FiShoppingBag, FiPercent } from 'react-icons/fi'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { StatsCard } from '@/components/dashboard/stats-card'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { SalesChart } from '@/components/dashboard/sales-chart'
import { RecentOrders } from '@/components/dashboard/recent-orders'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { TopProducts } from '@/components/dashboard/top-products'
import { dashboardStats } from '@/data/mock-data'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here&apos;s your business overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Revenue"
            value={dashboardStats.totalRevenue}
            change={dashboardStats.revenueGrowth}
            icon={<FiDollarSign className="w-6 h-6" />}
            format="currency"
            index={0}
          />
          <StatsCard
            title="Total Users"
            value={dashboardStats.totalUsers}
            change={dashboardStats.userGrowth}
            icon={<FiUsers className="w-6 h-6" />}
            index={1}
          />
          <StatsCard
            title="Total Orders"
            value={dashboardStats.totalOrders}
            change={dashboardStats.orderGrowth}
            icon={<FiShoppingBag className="w-6 h-6" />}
            index={2}
          />
          <StatsCard
            title="Conversion Rate"
            value={dashboardStats.conversionRate}
            change={dashboardStats.conversionGrowth}
            icon={<FiPercent className="w-6 h-6" />}
            format="percentage"
            index={3}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <SalesChart />
          </div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentOrders />
          </div>
          <div>
            <TopProducts />
          </div>
        </div>

        {/* Activity */}
        <ActivityFeed />
      </div>
    </DashboardLayout>
  )
}
