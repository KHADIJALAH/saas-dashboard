'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { SalesChart } from '@/components/dashboard/sales-chart'
import { trafficSources } from '@/data/mock-data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const weeklyData = [
  { day: 'Mon', visitors: 1200, pageViews: 3400 },
  { day: 'Tue', visitors: 1800, pageViews: 4200 },
  { day: 'Wed', visitors: 1400, pageViews: 3800 },
  { day: 'Thu', visitors: 2200, pageViews: 5100 },
  { day: 'Fri', visitors: 1900, pageViews: 4500 },
  { day: 'Sat', visitors: 800, pageViews: 2100 },
  { day: 'Sun', visitors: 600, pageViews: 1800 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Detailed insights about your business performance.</p>
        </div>

        {/* Revenue Chart */}
        <RevenueChart />

        {/* Traffic & Sales Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Traffic */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="visitors" fill="#6366f1" radius={[4, 4, 0, 0]} name="Visitors" />
                    <Bar dataKey="pageViews" fill="#a855f7" radius={[4, 4, 0, 0]} name="Page Views" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <SalesChart />
        </div>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{source.source}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {source.visitors.toLocaleString()} ({source.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
