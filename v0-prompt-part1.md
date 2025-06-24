# Climate Intelligence Network - Part 1: Basic Setup & Authentication

## Project Overview
Create a NextJS admin dashboard for the Climate Intelligence Network, a gamified mobile app where users complete climate-related tasks to earn points and badges. The app has organizations that create tasks, offer prizes, and recruit members. Users submit data (photos, surveys, observations) for tasks and get rewarded with points that contribute to global leaderboards.

## Technical Requirements
- NextJS App Router
- TypeScript
- Tailwind CSS
- Mobile responsive design
- Dark/light mode toggle
- Use shadcn/ui components

## User Roles
- **SUPER_ADMIN**: Platform administrators who manage organizations and oversee the entire system
- **ORG_ADMIN**: Organization administrators who manage their organization's tasks, members, and prizes

## Part 1 Scope: Authentication & Basic Layout

### File Structure to Create
```
app/
├── globals.css
├── layout.tsx (root layout with theme provider)
├── page.tsx (landing page)
├── sign-in/
│   └── page.tsx
├── organization-signup/
│   └── page.tsx
├── pending-approval/
│   └── page.tsx
├── application-rejected/
│   └── page.tsx
├── (super-admin)/
│   ├── layout.tsx (with SuperAdmin sidebar)
│   ├── dashboard/
│   │   └── page.tsx
│   ├── organizations/
│   │   └── page.tsx
│   ├── tasks/
│   │   └── page.tsx
│   ├── users/
│   │   └── page.tsx
│   ├── data-validation/
│   │   └── page.tsx
│   └── system/
│       └── page.tsx
└── (org-admin)/
    ├── layout.tsx (with OrgAdmin sidebar)
    ├── dashboard/
    │   └── page.tsx
    ├── tasks/
    │   └── page.tsx
    ├── members/
    │   └── page.tsx
    ├── prizes/
    │   └── page.tsx
    ├── join-requests/
    │   └── page.tsx
    ├── admins/
    │   └── page.tsx
    └── analytics/
        └── page.tsx
```

### Components to Create
```
components/
├── ui/ (shadcn/ui components)
├── theme-provider.tsx
├── theme-toggle.tsx
├── super-admin-sidebar.tsx
├── org-admin-sidebar.tsx
└── dashboard-header.tsx
```

## 1. Root Layout & Theme Setup

### Root Layout (`app/layout.tsx`)
- Include theme provider for dark/light mode
- Set up global fonts and styling
- Climate/nature themed color palette (greens with blue accents)

### Theme Provider
- Context for dark/light mode
- Persist preference in localStorage
- Smooth transitions between modes

## 2. Landing Page

### Home Page (`/`)
**Hero Section:**
- Climate Intelligence Network branding and logo
- Compelling headline: "Gamify Climate Action, Make Real Impact"
- Subtitle explaining the platform's mission
- Beautiful climate/nature background imagery
- Call-to-action buttons:
  - "Sign In" (existing users)
  - "Join as Organization" (new organizations)

**Features Section:**
- Three main value propositions with icons:
  - **For Organizations**: Create meaningful climate tasks, engage communities
  - **For Users**: Complete tasks, earn points, make a difference
  - **For Admins**: Powerful tools to manage and validate climate data

**How It Works:**
- Step-by-step process visualization:
  1. Organizations create climate-focused tasks
  2. Users complete tasks and submit data
  3. Admins validate submissions and award points
  4. Global leaderboards track impact

**Impact Statistics** (Mock data):
- Total tasks completed
- Active organizations
- Points awarded
- Climate data collected

**Navigation Header:**
- Logo
- Navigation links: About, How It Works, Contact
- Theme toggle (dark/light mode)
- Sign In button

**Footer:**
- Quick links
- Contact information
- Social media links
- Privacy policy and terms

## 3. Authentication Pages

### Sign-in Page (`/sign-in`)
- Clean, modern login form
- Email and password fields
- "Sign in" button
- Link to organization signup
- Mock authentication logic that redirects based on role:
  - SUPER_ADMIN → `/super-admin/dashboard`
  - ORG_ADMIN → check status:
    - Pending → `/pending-approval`
    - Rejected → `/application-rejected`
    - Approved → `/org-admin/dashboard`

### Organization Signup (`/organization-signup`)
**Form Fields:**
- Organization name (required)
- Description (textarea)
- Logo upload (file input with preview)
- Website URL
- Contact email (required)
- Physical location
- Organization capabilities (checkboxes):
  - Player Organization (recruit members)
  - Task Maker (create tasks)
  - Prize Giver (offer rewards)
- Admin details:
  - Full name (required)
  - Email (required)
  - Phone number

### Pending Approval (`/pending-approval`)
- Status card showing "Application Under Review"
- Application details summary
- Estimated review time (2-5 business days)
- Contact support information
- Sign out option

### Application Rejected (`/application-rejected`)
- Rejection notification
- Reason for rejection (from mock data)
- "Submit New Application" button
- Appeal process information
- Contact support details

## 4. Layout Components

### Super Admin Sidebar Navigation
- Dashboard (overview icon)
- Organization Management (building icon)
- Task Approvals (clipboard icon)
- User Management (users icon)
- Data Validation (shield-check icon)
- System Settings (settings icon)
- User menu with theme toggle and sign out

### Org Admin Sidebar Navigation
- Dashboard (overview icon)
- Tasks (clipboard icon) - show only if task maker enabled
- Members (users icon) - show only if player org enabled
- Prizes (gift icon) - show only if prize giver enabled
- Join Requests (user-plus icon) - show only if player org enabled
- Admins (crown icon)
- Analytics (chart icon)
- User menu with theme toggle and sign out

### Responsive Behavior
- Collapsible sidebar on mobile
- Hamburger menu toggle
- Overlay on mobile when open
- Touch-friendly navigation

## 5. Basic Dashboard Pages (Placeholder Content)

### Super Admin Dashboard (`/(super-admin)/dashboard`)
- Welcome message
- Placeholder cards for:
  - Total Organizations
  - Pending Tasks
  - Total Users
  - System Health
- "More features coming soon..." message

### Org Admin Dashboard (`/(org-admin)/dashboard`)
- Organization profile card
- Placeholder cards for:
  - Active Tasks
  - Total Members
  - Points Distributed
  - Recent Activity
- "More features coming soon..." message

### All Other Pages
- Simple placeholder pages with:
  - Page title
  - Breadcrumb navigation
  - "This feature will be implemented in the next update" message
  - Basic layout structure ready for content

## 6. Mock Data & Types

### TypeScript Types
```typescript
type UserRole = 'SUPER_ADMIN' | 'ORG_ADMIN' | 'USER'

type OrganizationStatus = 'pending' | 'approved' | 'rejected'

interface User {
  id: string
  email: string
  name: string
  role: UserRole
  organizationId?: string
  organizationStatus?: OrganizationStatus
}

interface Organization {
  id: string
  name: string
  description: string
  status: OrganizationStatus
  capabilities: {
    isPlayerOrg: boolean
    isTaskMaker: boolean
    isPrizeGiver: boolean
  }
}
```

### Mock Authentication
- Sample users for testing different scenarios
- Mock login function that simulates API call
- Role-based routing logic

## Design Requirements

### Color Scheme
- Primary: Green (#10B981)
- Secondary: Blue (#3B82F6)
- Success: Emerald (#059669)
- Warning: Amber (#D97706)
- Error: Red (#DC2626)
- Neutral: Slate shades

### Typography
- Clean, readable fonts
- Consistent heading hierarchy
- Proper contrast ratios

### Mobile Responsive
- Sidebar collapses to hamburger menu
- Touch-friendly button sizes (min 44px)
- Proper spacing for mobile interactions
- Cards stack vertically on small screens

Create this foundation with proper TypeScript types, clean component structure, and a polished UI. Include sample data for testing the authentication flow and navigation.
