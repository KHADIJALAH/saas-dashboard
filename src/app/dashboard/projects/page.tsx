'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FiPlus, FiCalendar, FiDollarSign } from 'react-icons/fi'
import { projects, users } from '@/data/mock-data'
import { formatCurrency, formatDate, getStatusColor, getPriorityColor } from '@/lib/utils'

export default function ProjectsPage() {
  const getTeamMembers = (memberIds: string[]) => {
    return memberIds.map(id => users.find(u => u.id === id)).filter(Boolean)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and track all your projects.</p>
          </div>
          <Button>
            <FiPlus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{project.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status.replace('-', ' ')}
                  </Badge>
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {formatDate(project.endDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiDollarSign className="w-4 h-4" />
                    {formatCurrency(project.budget)}
                  </span>
                </div>

                {/* Team */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {getTeamMembers(project.teamMembers).slice(0, 4).map((member, idx) => (
                      <Avatar key={idx} src={member?.avatar} name={member?.name || ''} size="sm" className="ring-2 ring-white dark:ring-dark-card" />
                    ))}
                    {project.teamMembers.length > 4 && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-dark-border flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400 ring-2 ring-white dark:ring-dark-card">
                        +{project.teamMembers.length - 4}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatCurrency(project.spent)} / {formatCurrency(project.budget)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
