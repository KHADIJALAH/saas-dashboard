import { User, Project, Task, DashboardStats, RevenueData, Order, Activity, Notification, SalesData, TrafficSource, ProductData } from '@/types'

// Dashboard Statistics
export const dashboardStats: DashboardStats = {
  totalRevenue: 284500,
  revenueGrowth: 12.5,
  totalUsers: 14280,
  userGrowth: 8.2,
  totalOrders: 3842,
  orderGrowth: 15.3,
  conversionRate: 3.24,
  conversionGrowth: -2.1,
}

// Revenue Data (Last 12 months)
export const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 18500, profit: 7200, expenses: 11300 },
  { month: 'Feb', revenue: 21200, profit: 8400, expenses: 12800 },
  { month: 'Mar', revenue: 19800, profit: 7800, expenses: 12000 },
  { month: 'Apr', revenue: 24500, profit: 10200, expenses: 14300 },
  { month: 'May', revenue: 28900, profit: 12500, expenses: 16400 },
  { month: 'Jun', revenue: 32100, profit: 14200, expenses: 17900 },
  { month: 'Jul', revenue: 29400, profit: 12800, expenses: 16600 },
  { month: 'Aug', revenue: 35200, profit: 15800, expenses: 19400 },
  { month: 'Sep', revenue: 38500, profit: 17200, expenses: 21300 },
  { month: 'Oct', revenue: 42100, profit: 19500, expenses: 22600 },
  { month: 'Nov', revenue: 45800, profit: 21200, expenses: 24600 },
  { month: 'Dec', revenue: 52500, profit: 24800, expenses: 27700 },
]

// Sales by Category
export const salesByCategory: SalesData[] = [
  { name: 'Electronics', value: 35, color: '#6366f1' },
  { name: 'Clothing', value: 25, color: '#8b5cf6' },
  { name: 'Home & Garden', value: 20, color: '#a855f7' },
  { name: 'Sports', value: 12, color: '#d946ef' },
  { name: 'Others', value: 8, color: '#ec4899' },
]

// Traffic Sources
export const trafficSources: TrafficSource[] = [
  { source: 'Organic Search', visitors: 45200, percentage: 42 },
  { source: 'Direct', visitors: 28400, percentage: 26 },
  { source: 'Social Media', visitors: 18900, percentage: 18 },
  { source: 'Referral', visitors: 10200, percentage: 9 },
  { source: 'Email', visitors: 5400, percentage: 5 },
]

// Top Products
export const topProducts: ProductData[] = [
  { id: '1', name: 'Pro Wireless Headphones', sales: 1284, revenue: 128400, growth: 24.5 },
  { id: '2', name: 'Smart Watch Series X', sales: 956, revenue: 286800, growth: 18.2 },
  { id: '3', name: 'Laptop Stand Aluminum', sales: 842, revenue: 42100, growth: 12.8 },
  { id: '4', name: 'USB-C Hub 7-in-1', sales: 756, revenue: 52920, growth: 8.4 },
  { id: '5', name: 'Mechanical Keyboard RGB', sales: 698, revenue: 104700, growth: 15.6 },
]

// Recent Orders
export const recentOrders: Order[] = [
  { id: 'ORD-7821', customer: 'John Smith', email: 'john@example.com', product: 'Pro Wireless Headphones', amount: 299.99, status: 'completed', date: '2024-01-15T10:30:00' },
  { id: 'ORD-7820', customer: 'Sarah Johnson', email: 'sarah@example.com', product: 'Smart Watch Series X', amount: 599.99, status: 'processing', date: '2024-01-15T09:45:00' },
  { id: 'ORD-7819', customer: 'Mike Brown', email: 'mike@example.com', product: 'Laptop Stand Aluminum', amount: 89.99, status: 'pending', date: '2024-01-15T08:20:00' },
  { id: 'ORD-7818', customer: 'Emily Davis', email: 'emily@example.com', product: 'USB-C Hub 7-in-1', amount: 79.99, status: 'completed', date: '2024-01-14T16:50:00' },
  { id: 'ORD-7817', customer: 'David Wilson', email: 'david@example.com', product: 'Mechanical Keyboard RGB', amount: 189.99, status: 'cancelled', date: '2024-01-14T14:30:00' },
  { id: 'ORD-7816', customer: 'Lisa Anderson', email: 'lisa@example.com', product: 'Pro Wireless Headphones', amount: 299.99, status: 'completed', date: '2024-01-14T11:20:00' },
  { id: 'ORD-7815', customer: 'James Taylor', email: 'james@example.com', product: 'Smart Watch Series X', amount: 599.99, status: 'processing', date: '2024-01-14T09:15:00' },
  { id: 'ORD-7814', customer: 'Emma Martinez', email: 'emma@example.com', product: 'Laptop Stand Aluminum', amount: 89.99, status: 'completed', date: '2024-01-13T15:40:00' },
]

// Users
export const users: User[] = [
  { id: '1', name: 'Alex Thompson', email: 'alex@company.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', role: 'admin', status: 'active', department: 'Engineering', joinedAt: '2022-03-15', lastActive: '2024-01-15T10:30:00' },
  { id: '2', name: 'Sarah Chen', email: 'sarah@company.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', role: 'manager', status: 'active', department: 'Marketing', joinedAt: '2022-06-20', lastActive: '2024-01-15T09:45:00' },
  { id: '3', name: 'Michael Roberts', email: 'michael@company.com', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', role: 'user', status: 'active', department: 'Sales', joinedAt: '2022-09-10', lastActive: '2024-01-14T16:20:00' },
  { id: '4', name: 'Emily Watson', email: 'emily@company.com', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', role: 'user', status: 'inactive', department: 'Design', joinedAt: '2023-01-05', lastActive: '2024-01-10T11:30:00' },
  { id: '5', name: 'David Kim', email: 'david@company.com', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', role: 'manager', status: 'active', department: 'Engineering', joinedAt: '2022-04-18', lastActive: '2024-01-15T08:15:00' },
  { id: '6', name: 'Jessica Lee', email: 'jessica@company.com', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', role: 'user', status: 'pending', department: 'HR', joinedAt: '2024-01-10', lastActive: '2024-01-15T10:00:00' },
  { id: '7', name: 'Daniel Brown', email: 'daniel@company.com', avatar: 'https://randomuser.me/api/portraits/men/7.jpg', role: 'user', status: 'active', department: 'Finance', joinedAt: '2023-05-22', lastActive: '2024-01-14T17:45:00' },
  { id: '8', name: 'Amanda Garcia', email: 'amanda@company.com', avatar: 'https://randomuser.me/api/portraits/women/8.jpg', role: 'user', status: 'active', department: 'Marketing', joinedAt: '2023-08-14', lastActive: '2024-01-15T07:30:00' },
  { id: '9', name: 'Chris Miller', email: 'chris@company.com', avatar: 'https://randomuser.me/api/portraits/men/9.jpg', role: 'manager', status: 'active', department: 'Sales', joinedAt: '2022-11-30', lastActive: '2024-01-14T14:20:00' },
  { id: '10', name: 'Rachel Adams', email: 'rachel@company.com', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', role: 'user', status: 'inactive', department: 'Support', joinedAt: '2023-02-28', lastActive: '2024-01-05T09:10:00' },
]

// Projects
export const projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved UX',
    status: 'in-progress',
    priority: 'high',
    progress: 68,
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    budget: 45000,
    spent: 28500,
    teamMembers: ['1', '2', '5'],
    tasks: [],
    createdAt: '2023-12-15',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native iOS and Android app for customer engagement',
    status: 'planning',
    priority: 'urgent',
    progress: 15,
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    budget: 120000,
    spent: 12000,
    teamMembers: ['1', '3', '5', '7'],
    tasks: [],
    createdAt: '2024-01-05',
  },
  {
    id: '3',
    name: 'CRM Integration',
    description: 'Integrate Salesforce CRM with internal systems',
    status: 'review',
    priority: 'medium',
    progress: 92,
    startDate: '2023-10-15',
    endDate: '2024-01-31',
    budget: 35000,
    spent: 32800,
    teamMembers: ['2', '4', '9'],
    tasks: [],
    createdAt: '2023-10-01',
  },
  {
    id: '4',
    name: 'Data Analytics Platform',
    description: 'Build internal analytics dashboard for business intelligence',
    status: 'in-progress',
    priority: 'high',
    progress: 45,
    startDate: '2023-11-01',
    endDate: '2024-04-30',
    budget: 85000,
    spent: 38200,
    teamMembers: ['1', '5', '7', '8'],
    tasks: [],
    createdAt: '2023-10-20',
  },
  {
    id: '5',
    name: 'Security Audit',
    description: 'Comprehensive security review and penetration testing',
    status: 'completed',
    priority: 'urgent',
    progress: 100,
    startDate: '2023-09-01',
    endDate: '2023-12-15',
    budget: 25000,
    spent: 24500,
    teamMembers: ['1', '9'],
    tasks: [],
    createdAt: '2023-08-15',
  },
]

// Tasks
export const tasks: Task[] = [
  { id: '1', title: 'Design homepage wireframes', description: 'Create low-fidelity wireframes for the new homepage', status: 'done', priority: 'high', assignee: '4', dueDate: '2024-01-20', createdAt: '2024-01-10', projectId: '1' },
  { id: '2', title: 'Implement user authentication', description: 'Add OAuth2 authentication with Google and GitHub', status: 'in-progress', priority: 'high', assignee: '1', dueDate: '2024-01-25', createdAt: '2024-01-12', projectId: '1' },
  { id: '3', title: 'Create API documentation', description: 'Document all REST API endpoints', status: 'todo', priority: 'medium', assignee: '5', dueDate: '2024-01-30', createdAt: '2024-01-14', projectId: '1' },
  { id: '4', title: 'Setup CI/CD pipeline', description: 'Configure GitHub Actions for automated testing and deployment', status: 'review', priority: 'high', assignee: '1', dueDate: '2024-01-22', createdAt: '2024-01-08', projectId: '1' },
  { id: '5', title: 'Mobile app mockups', description: 'Design high-fidelity mockups for the mobile app', status: 'in-progress', priority: 'high', assignee: '4', dueDate: '2024-02-10', createdAt: '2024-01-15', projectId: '2' },
  { id: '6', title: 'Database schema design', description: 'Design the database schema for the mobile app', status: 'todo', priority: 'medium', assignee: '5', dueDate: '2024-02-15', createdAt: '2024-01-15', projectId: '2' },
  { id: '7', title: 'CRM data migration', description: 'Migrate existing customer data to Salesforce', status: 'review', priority: 'high', assignee: '9', dueDate: '2024-01-28', createdAt: '2023-12-01', projectId: '3' },
  { id: '8', title: 'Analytics dashboard UI', description: 'Build the frontend for analytics dashboard', status: 'in-progress', priority: 'high', assignee: '4', dueDate: '2024-02-28', createdAt: '2024-01-05', projectId: '4' },
]

// Activities
export const activities: Activity[] = [
  { id: '1', user: { name: 'Alex Thompson', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, action: 'completed task', target: 'Setup CI/CD pipeline', timestamp: '2024-01-15T10:30:00' },
  { id: '2', user: { name: 'Sarah Chen', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }, action: 'created project', target: 'Q1 Marketing Campaign', timestamp: '2024-01-15T09:45:00' },
  { id: '3', user: { name: 'Michael Roberts', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }, action: 'added comment on', target: 'Mobile App Development', timestamp: '2024-01-15T08:20:00' },
  { id: '4', user: { name: 'Emily Watson', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' }, action: 'uploaded design for', target: 'Homepage wireframes', timestamp: '2024-01-14T16:50:00' },
  { id: '5', user: { name: 'David Kim', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' }, action: 'merged PR in', target: 'Website Redesign', timestamp: '2024-01-14T14:30:00' },
  { id: '6', user: { name: 'Jessica Lee', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' }, action: 'joined team', target: 'Data Analytics Platform', timestamp: '2024-01-14T11:00:00' },
]

// Notifications
export const notifications: Notification[] = [
  { id: '1', title: 'New team member', message: 'Jessica Lee has joined the team', type: 'info', read: false, createdAt: '2024-01-15T10:30:00' },
  { id: '2', title: 'Project deadline', message: 'CRM Integration is due in 2 days', type: 'warning', read: false, createdAt: '2024-01-15T09:00:00' },
  { id: '3', title: 'Task completed', message: 'Security Audit has been completed', type: 'success', read: true, createdAt: '2024-01-14T16:00:00' },
  { id: '4', title: 'Budget alert', message: 'Mobile App Development is at 10% of budget', type: 'info', read: true, createdAt: '2024-01-14T14:00:00' },
  { id: '5', title: 'Server issue', message: 'High CPU usage detected on production server', type: 'error', read: false, createdAt: '2024-01-14T11:30:00' },
]
