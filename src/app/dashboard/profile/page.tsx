'use client'

import { useState, useEffect } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { FiUser, FiMail, FiPhone, FiMapPin, FiCamera, FiSave } from 'react-icons/fi'
import toast from 'react-hot-toast'

interface User {
  name: string
  email: string
  role: string
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+212 6XX XXX XXX',
    location: 'Casablanca, Morocco',
    bio: 'Full Stack Developer passionate about building great products.',
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed)
      setFormData(prev => ({
        ...prev,
        name: parsed.name,
        email: parsed.email,
      }))
    }
  }, [])

  const handleSave = () => {
    if (user) {
      const updatedUser = { ...user, name: formData.name, email: formData.email }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUser(updatedUser)
    }
    setIsEditing(false)
    toast.success('Profile updated successfully!')
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      case 'manager':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your profile information</p>
        </div>

        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <Avatar name={user?.name || 'User'} size="xl" />
                <button className="absolute bottom-0 right-0 p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                  <FiCamera className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user?.name || 'User'}
                  </h2>
                  <Badge className={getRoleBadgeColor(user?.role || 'user')}>
                    {user?.role || 'User'}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Member since January 2024
                </p>
              </div>
              <Button
                variant={isEditing ? 'primary' : 'outline'}
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <FiSave className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  'Edit Profile'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  icon={<FiUser className="w-5 h-5" />}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                />
                <Input
                  label="Email"
                  type="email"
                  icon={<FiMail className="w-5 h-5" />}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                />
                <Input
                  label="Phone"
                  icon={<FiPhone className="w-5 h-5" />}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                />
                <Input
                  label="Location"
                  icon={<FiMapPin className="w-5 h-5" />}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                About
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'AWS'].map((skill) => (
                      <Badge key={skill} className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Stats */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Activity Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Projects', value: '12' },
                { label: 'Tasks Completed', value: '48' },
                { label: 'Hours Logged', value: '320' },
                { label: 'Team Members', value: '8' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
