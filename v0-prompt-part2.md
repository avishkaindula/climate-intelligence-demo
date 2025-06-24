# Climate Intelligence Network - Part 2: Super Admin Features

## Prerequisites
This is Part 2 of the Climate Intelligence Network admin dashboard. You should have completed Part 1 which includes:
- Basic authentication and layout structure
- Super admin and org admin sidebars
- Theme provider and responsive design
- Placeholder dashboard pages

## Part 2 Scope: Super Admin Organization & Task Management

### Pages to Enhance in `(super-admin)` Route Group

## 1. Organization Management (`/organizations`)

### Main Organizations Page
- Data table with organizations list
- Columns: Name, Status, Admin Count, Created Date, Actions
- Status badges: Pending (yellow), Approved (green), Rejected (red)
- Search and filter functionality
- Tabs for: All, Pending, Approved, Rejected

### Sub-routes to Create:
- `/organizations/pending` - Organizations awaiting approval
- `/organizations/approved` - Active organizations
- `/organizations/rejected` - Declined applications
- `/organizations/[id]` - Organization details view

### Organization Details Modal/Page
**Display Information:**
- Organization name and logo
- Description and contact details
- Website and location
- Requested capabilities (Player Org, Task Maker, Prize Giver)
- Admin user information
- Application timestamp

**Actions for Pending Organizations:**
- Approve/Reject buttons
- Capability toggles (enable/disable specific permissions)
- Add approval/rejection notes
- Send notification to organization

**Actions for Approved Organizations:**
- Toggle capabilities on/off
- View organization statistics
- View admin users
- Approve additional admin requests
- Suspend/reactivate organization

## 2. Task Management (`/tasks`)

### Main Tasks Page
- Data table with all tasks across organizations
- Columns: Title, Organization, Type, Status, Points, Created Date, Actions
- Status badges: Pending (yellow), Approved (green), Rejected (red), Active (blue)
- Filter by: Status, Task Type, Organization, Date Range

### Sub-routes to Create:
- `/tasks/pending` - Tasks awaiting approval
- `/tasks/approved` - Approved tasks
- `/tasks/rejected` - Rejected tasks
- `/tasks/[id]` - Task details view

### Task Details View
**Basic Information:**
- Title, description, instructions
- Task type: data_collection, photo_submission, survey, observation
- Category and difficulty level
- Points reward

**Settings Display:**
- Max submissions per user
- Cooldown period (days)
- Location requirements (target location, radius)
- File upload settings (required, allowed types, size limits)
- Expiration date

**Custom Fields:**
- Display required data fields as JSON
- Show validation rules
- Preview form structure

**Actions:**
- Approve/Reject with feedback
- Request modifications
- View organization details
- Monitor submission statistics

## 3. Enhanced Dashboard (`/dashboard`)

### Overview Cards
- Total Organizations (with breakdown by status)
- Pending Approvals (organizations + tasks)
- Total Users (with banned count)
- System Health Status

### Recent Activity Feed
- New organization applications
- Task submissions for approval
- User warnings issued
- System events

### Quick Actions
- Approve pending organizations
- Review flagged content
- System announcements

### Analytics Charts
- Organization registrations over time
- Task creation trends
- User activity metrics

## 4. User Management (`/users`) - Basic Implementation

### User List Table
- Columns: Name, Email, Role, Points, Warning Count, Status, Join Date
- Search by name/email
- Filter by: Role, Ban Status, Warning Count
- Pagination

### User Actions
- View user profile
- Ban/unban user
- Reset warnings
- View submission history
- Send message/notification

### User Profile Modal
- Basic information (name, email, location)
- Points breakdown (total, redeemable, leaderboard)
- Badge count and recent badges
- Warning history
- Recent submissions

## 5. Data Validation (`/data-validation`) - Basic Structure

### Placeholder Implementation
- List view of pending submissions
- Basic submission details
- Approve/reject actions
- Warning system integration
- "Full implementation in Part 3" message

## Components to Create

### UI Components
```typescript
// Organization Components
- OrganizationCard
- OrganizationStatusBadge
- OrganizationApprovalModal
- CapabilityToggle

// Task Components
- TaskCard
- TaskStatusBadge
- TaskDetailsModal
- TaskApprovalActions

// User Components
- UserTable
- UserProfileModal
- UserActionButtons
- BanUserDialog

// General Components
- DataTable (reusable)
- StatusBadge (reusable)
- FilterDropdown
- SearchInput
- PaginationControls
```

## Mock Data Requirements

### Organizations Data
```typescript
interface Organization {
  id: string
  name: string
  description: string
  logoUrl?: string
  website?: string
  contactEmail: string
  location: string
  status: 'pending' | 'approved' | 'rejected'
  capabilities: {
    isPlayerOrg: boolean
    isTaskMaker: boolean
    isPrizeGiver: boolean
  }
  adminUsers: AdminUser[]
  createdAt: string
  approvedAt?: string
  rejectedAt?: string
  rejectionReason?: string
}
```

### Tasks Data
```typescript
interface Task {
  id: string
  organizationId: string
  organizationName: string
  title: string
  description: string
  instructions: string
  taskType: 'data_collection' | 'photo_submission' | 'survey' | 'observation'
  category: string
  difficultyLevel: 'easy' | 'medium' | 'hard'
  pointsReward: number
  maxSubmissionsPerUser: number
  cooldownPeriodDays: number
  locationRequired: boolean
  targetLocation?: string
  locationRadiusKm?: number
  fileUploadRequired: boolean
  allowedFileTypes: string[]
  maxFileSizeMB: number
  maxFilesPerSubmission: number
  requiredDataFields: any
  validationRules: any
  expiresAt?: string
  status: 'pending' | 'approved' | 'rejected' | 'active'
  createdAt: string
  createdBy: string
}
```

### Users Data
```typescript
interface User {
  id: string
  email: string
  fullName: string
  username: string
  avatarUrl?: string
  role: 'USER' | 'ORG_ADMIN' | 'SUPER_ADMIN'
  totalPoints: number
  redeemablePoints: number
  leaderboardPoints: number
  badgeCount: number
  warningCount: number
  isBanned: boolean
  banExpiresAt?: string
  joinedAt: string
  lastActive: string
}
```

## Features to Implement

### Organization Approval Workflow
1. View pending organizations in a clean table
2. Click to open detailed modal with all application info
3. Toggle capability permissions as needed
4. Add approval/rejection notes
5. Confirm action with toast notification
6. Update organization status in real-time

### Task Approval System
1. Review task details in structured format
2. Preview how the task will appear to users
3. Check validation rules and required fields
4. Approve with capability to suggest modifications
5. Reject with detailed feedback
6. Track approval history

### Bulk Actions
- Select multiple organizations/tasks for bulk approval
- Bulk reject with common reason
- Export data to CSV

### Real-time Updates
- Live count updates for pending items
- Toast notifications for new submissions
- Auto-refresh for time-sensitive data

Create comprehensive super admin functionality with polished UI, proper error handling, and intuitive workflows. Focus on the organization and task approval processes as these are core to the platform's operation.
