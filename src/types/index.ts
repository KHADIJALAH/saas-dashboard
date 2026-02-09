// User Types
export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: 'admin' | 'manager' | 'user'
  status: 'active' | 'inactive' | 'pending'
  department: string
  joinedAt: string
  lastActive: string
}

// Project Types
export interface Project {
  id: string
  name: string
  description: string
  status: 'planning' | 'in-progress' | 'review' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  progress: number
  startDate: string
  endDate: string
  budget: number
  spent: number
  teamMembers: string[]
  tasks: Task[]
  createdAt: string
}

export interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  priority: 'low' | 'medium' | 'high'
  assignee: string
  dueDate: string
  createdAt: string
  projectId: string
}

// Analytics Types
export interface AnalyticsData {
  revenue: RevenueData[]
  users: UserAnalytics
  sales: SalesData[]
  topProducts: ProductData[]
  recentOrders: Order[]
  trafficSources: TrafficSource[]
}

export interface RevenueData {
  month: string
  revenue: number
  profit: number
  expenses: number
}

export interface UserAnalytics {
  total: number
  active: number
  new: number
  growth: number
}

export interface SalesData {
  name: string
  value: number
  color: string
}

export interface ProductData {
  id: string
  name: string
  sales: number
  revenue: number
  growth: number
}

export interface Order {
  id: string
  customer: string
  email: string
  product: string
  amount: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  date: string
}

export interface TrafficSource {
  source: string
  visitors: number
  percentage: number
}

// Notification Types
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: string
}

// Activity Types
export interface Activity {
  id: string
  user: {
    name: string
    avatar: string
  }
  action: string
  target: string
  timestamp: string
}

// Dashboard Stats
export interface DashboardStats {
  totalRevenue: number
  revenueGrowth: number
  totalUsers: number
  userGrowth: number
  totalOrders: number
  orderGrowth: number
  conversionRate: number
  conversionGrowth: number
}

// Table Types
export interface TableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface PaginationState {
  page: number
  pageSize: number
  total: number
}

// Form Types
export interface LoginFormData {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface ProfileFormData {
  name: string
  email: string
  phone: string
  department: string
  bio: string
}
