# SaaSHub - Modern Analytics Dashboard

A comprehensive SaaS analytics dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features authentication, data visualization, user management, and more.

![Dashboard Preview](https://via.placeholder.com/800x400?text=SaaSHub+Dashboard)

## Features

- **Authentication** - Secure login with NextAuth.js (Credentials, Google, GitHub)
- **Dashboard Analytics** - Revenue charts, sales metrics, KPIs
- **User Management** - CRUD operations with search, filter, pagination
- **Project Management** - Track projects with progress, budgets, teams
- **Task Board** - Kanban-style task management
- **Dark/Light Mode** - Theme switching with persistence
- **Responsive Design** - Works on all devices
- **Real-time Notifications** - Alert system with badges

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KHADIJALAH/saas-dashboard.git
cd saas-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

| Role    | Email              | Password   |
|---------|-------------------|------------|
| Admin   | admin@demo.com    | admin123   |
| Manager | manager@demo.com  | manager123 |
| User    | user@demo.com     | user123    |

## Project Structure

```
src/
├── app/
│   ├── api/auth/        # NextAuth API routes
│   ├── dashboard/       # Dashboard pages
│   │   ├── analytics/   # Analytics page
│   │   ├── users/       # User management
│   │   ├── projects/    # Projects page
│   │   ├── tasks/       # Kanban tasks
│   │   └── settings/    # Settings page
│   └── login/           # Login page
├── components/
│   ├── dashboard/       # Dashboard components
│   ├── layout/          # Layout components
│   ├── providers/       # Context providers
│   └── ui/              # Reusable UI components
├── data/                # Mock data
├── lib/                 # Utilities & auth config
├── store/               # Zustand stores
└── types/               # TypeScript types
```

## Key Features Explained

### Authentication
- JWT-based session management
- Role-based access control (Admin, Manager, User)
- OAuth integration ready (Google, GitHub)

### Dashboard
- Real-time statistics with growth indicators
- Interactive charts (Area, Bar, Pie)
- Recent orders table
- Activity feed

### User Management
- Search and filter users
- Role and status filtering
- Edit and delete operations
- Responsive table design

### Projects
- Project cards with progress tracking
- Budget management
- Team member avatars
- Priority and status badges

### Tasks
- Kanban board layout
- Drag-and-drop ready structure
- Priority indicators
- Due date tracking

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Author

**Khadija Lahlou** - Full Stack Developer
- LinkedIn: [khadija-lahlou](https://www.linkedin.com/in/khadija-lahlou-48a8062b9)
- Email: khadijadev728@gmail.com

## License

MIT License
