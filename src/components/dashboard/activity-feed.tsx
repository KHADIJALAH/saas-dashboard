'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { activities } from '@/data/mock-data'
import { getRelativeTime } from '@/lib/utils'

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200 dark:divide-dark-border">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors"
            >
              <div className="flex items-start gap-4">
                <Avatar src={activity.user.avatar} name={activity.user.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{activity.user.name}</span>{' '}
                    <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>{' '}
                    <span className="font-medium text-primary-600 dark:text-primary-400">
                      {activity.target}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {getRelativeTime(activity.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
