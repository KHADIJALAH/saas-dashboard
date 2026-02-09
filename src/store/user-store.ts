import { create } from 'zustand'
import { User } from '@/types'
import { users as initialUsers } from '@/data/mock-data'

interface UserState {
  users: User[]
  selectedUser: User | null
  isLoading: boolean
  searchQuery: string
  filterRole: string
  filterStatus: string
  setUsers: (users: User[]) => void
  addUser: (user: Omit<User, 'id'>) => void
  updateUser: (id: string, data: Partial<User>) => void
  deleteUser: (id: string) => void
  setSelectedUser: (user: User | null) => void
  setSearchQuery: (query: string) => void
  setFilterRole: (role: string) => void
  setFilterStatus: (status: string) => void
  getFilteredUsers: () => User[]
}

export const useUserStore = create<UserState>((set, get) => ({
  users: initialUsers,
  selectedUser: null,
  isLoading: false,
  searchQuery: '',
  filterRole: 'all',
  filterStatus: 'all',

  setUsers: (users) => set({ users }),

  addUser: (userData) => {
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substring(2, 9),
    }
    set((state) => ({
      users: [...state.users, newUser],
    }))
  },

  updateUser: (id, data) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...data } : user
      ),
    }))
  },

  deleteUser: (id) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
      selectedUser: state.selectedUser?.id === id ? null : state.selectedUser,
    }))
  },

  setSelectedUser: (user) => set({ selectedUser: user }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterRole: (role) => set({ filterRole: role }),
  setFilterStatus: (status) => set({ filterStatus: status }),

  getFilteredUsers: () => {
    const { users, searchQuery, filterRole, filterStatus } = get()

    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.department.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesRole = filterRole === 'all' || user.role === filterRole
      const matchesStatus = filterStatus === 'all' || user.status === filterStatus

      return matchesSearch && matchesRole && matchesStatus
    })
  },
}))
