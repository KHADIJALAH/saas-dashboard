'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { FiPlus, FiCalendar, FiDollarSign } from 'react-icons/fi'
import { projects as initialProjects, users } from '@/data/mock-data'
import { formatCurrency, formatDate, getStatusColor, getPriorityColor } from '@/lib/utils'
import toast from 'react-hot-toast'

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    budget: '',
    priority: 'medium',
  })

  const getTeamMembers = (memberIds: string[]) => {
    return memberIds.map(id => users.find(u => u.id === id)).filter(Boolean)
  }

  const handleCreateProject = () => {
    if (!newProject.name || !newProject.description) {
      toast.error('Please fill all required fields')
      return
    }

    const project = {
      id: `p${Date.now()}`,
      name: newProject.name,
      description: newProject.description,
      status: 'planning' as const,
      priority: newProject.priority as 'low' | 'medium' | 'high',
      progress: 0,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      budget: Number(newProject.budget) || 10000,
      spent: 0,
      teamMembers: ['1'],
    }

    setProjects([project, ...projects])
    setIsModalOpen(false)
    setNewProject({ name: '', description: '', budget: '', priority: 'medium' })
    toast.success('Project created successfully!')
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and track all your projects.</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <FiPlus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Create Project Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Project" size="lg">
          <div className="space-y-4">
            <Input
              label="Project Name"
              placeholder="Enter project name"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter project description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={3}
              />
            </div>
            <Input
              label="Budget ($)"
              type="number"
              placeholder="Enter budget"
              value={newProject.budget}
              onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Priority
              </label>
              <select
                value={newProject.priority}
                onChange={(e) => setNewProject({ ...newProject, priority: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleCreateProject} className="flex-1">
                Create Project
              </Button>
            </div>
          </div>
        </Modal>

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
