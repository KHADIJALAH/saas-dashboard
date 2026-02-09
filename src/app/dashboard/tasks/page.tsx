'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FiPlus, FiCalendar } from 'react-icons/fi'
import { tasks, users } from '@/data/mock-data'
import { formatDate, getStatusColor, getPriorityColor } from '@/lib/utils'

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-500' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-500' },
  { id: 'review', title: 'In Review', color: 'bg-orange-500' },
  { id: 'done', title: 'Done', color: 'bg-green-500' },
]

export default function TasksPage() {
  const getUser = (id: string) => users.find(u => u.id === id)
  const getTasksByStatus = (status: string) => tasks.filter(t => t.status === status)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Kanban board for task management.</p>
          </div>
          <Button>
            <FiPlus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <div key={column.id} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${column.color}`} />
                <h3 className="font-semibold text-gray-900 dark:text-white">{column.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({getTasksByStatus(column.id).length})
                </span>
              </div>

              <div className="space-y-3">
                {getTasksByStatus(column.id).map((task) => {
                  const assignee = getUser(task.assignee)
                  return (
                    <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{task.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                          {task.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <FiCalendar className="w-3 h-3" />
                            {formatDate(task.dueDate)}
                          </div>
                          {assignee && (
                            <Avatar src={assignee.avatar} name={assignee.name} size="sm" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}

                <button className="w-full py-2 border-2 border-dashed border-gray-200 dark:border-dark-border rounded-lg text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors">
                  <FiPlus className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
