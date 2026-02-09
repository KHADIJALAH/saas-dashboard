'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { FiPlus, FiCalendar } from 'react-icons/fi'
import { tasks as initialTasks, users } from '@/data/mock-data'
import { formatDate, getStatusColor, getPriorityColor } from '@/lib/utils'
import toast from 'react-hot-toast'

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-500' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-500' },
  { id: 'review', title: 'In Review', color: 'bg-orange-500' },
  { id: 'done', title: 'Done', color: 'bg-green-500' },
]

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedColumn, setSelectedColumn] = useState('todo')
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
  })

  const getUser = (id: string) => users.find(u => u.id === id)
  const getTasksByStatus = (status: string) => tasks.filter(t => t.status === status)

  const handleCreateTask = () => {
    if (!newTask.title) {
      toast.error('Please enter a task title')
      return
    }

    const task = {
      id: `t${Date.now()}`,
      title: newTask.title,
      description: newTask.description || 'No description',
      status: selectedColumn as 'todo' | 'in-progress' | 'review' | 'done',
      priority: newTask.priority as 'low' | 'medium' | 'high',
      assignee: '1',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      projectId: 'p1',
    }

    setTasks([task, ...tasks])
    setIsModalOpen(false)
    setNewTask({ title: '', description: '', priority: 'medium' })
    toast.success('Task created successfully!')
  }

  const openModalForColumn = (columnId: string) => {
    setSelectedColumn(columnId)
    setIsModalOpen(true)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Kanban board for task management.</p>
          </div>
          <Button onClick={() => openModalForColumn('todo')}>
            <FiPlus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>

        {/* Create Task Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Task" size="md">
          <div className="space-y-4">
            <Input
              label="Task Title"
              placeholder="Enter task title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Priority
              </label>
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select
                value={selectedColumn}
                onChange={(e) => setSelectedColumn(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                {columns.map(col => (
                  <option key={col.id} value={col.id}>{col.title}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleCreateTask} className="flex-1">
                Create Task
              </Button>
            </div>
          </div>
        </Modal>

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

                <button
                  onClick={() => openModalForColumn(column.id)}
                  className="w-full py-2 border-2 border-dashed border-gray-200 dark:border-dark-border rounded-lg text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
                >
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
