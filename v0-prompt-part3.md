# Climate Intelligence Network - Part 3: Org Admin Features & Data Validation

## Prerequisites
This is Part 3 of the Climate Intelligence Network admin dashboard. You should have completed:
- Part 1: Basic authentication, layout, and navigation
- Part 2: Super admin organization and task management

## Part 3 Scope: Org Admin Dashboard & Data Validation

### Org Admin Features to Implement

## 1. Task Management (`/(org-admin)/tasks`)

### Enhanced Dashboard
- Organization profile card with status and capabilities
- Quick stats: Active tasks, total submissions, points distributed
- Recent activity feed for the organization

### Task Creation (`/tasks/create`)
**Multi-step Form:**

**Step 1: Basic Information**
- Title (required)
- Description (rich text editor)
- Instructions for users
- Task category dropdown (Wildlife, Pollution, Weather, Conservation, etc.)
- Difficulty level (Easy, Medium, Hard)
- Points reward (number input)

**Step 2: Task Type & Requirements**
- Task type selection with descriptions:
  - Data Collection: Structured data entry
  - Photo Submission: Image-based tasks
  - Survey: Questionnaire format
  - Observation: Field notes and documentation
- File upload requirements toggle
- Allowed file types (checkboxes for images, videos, documents, zip)
- Max file size (MB) and max files per submission

**Step 3: Submission Settings**
- Max submissions per user
- Cooldown period (days between submissions)
- Location requirements toggle
- Target location (map picker or address input)
- Radius in kilometers (if location required)

**Step 4: Custom Fields Builder**
- Dynamic form builder for required data fields
- Field types: text, number, date, dropdown, checkbox, file upload
- Validation rules for each field
- Preview of user-facing form

**Step 5: Review & Submit**
- Summary of all task settings
- Preview how task appears to users
- Submit for super admin approval

### Task Management List
- Table of organization's tasks with status
- Edit pending tasks
- View submission statistics
- Duplicate task functionality
- Archive completed tasks

## 2. Member Management (`/(org-admin)/members`)

### Members Overview
- Total member count card
- Recent joins this month
- Most active members leaderboard
- Member activity chart

### Members Table
- Columns: Name, Join Date, Points Earned, Submissions, Status, Actions
- Search and filter functionality
- Sort by activity, points, join date
- View member profile details
- Remove member action

### Member Profile Modal
- Basic info (name, email, location)
- Points earned for this organization
- Submission history
- Badges earned through org tasks
- Activity timeline

## 3. Join Requests (`/(org-admin)/join-requests`)

### Pending Requests Table
- User name, email, request date, message
- View user profile before approval
- Approve/reject with optional message
- Bulk actions for multiple requests

### Request Details
- User profile information
- Points and badges from other activities
- Reason for joining (if provided)
- Approval workflow with notifications

## 4. Prize Management (`/(org-admin)/prizes`)

### Prizes Overview
- Total prizes offered
- Active redemptions count
- Points allocated vs redeemed
- Popular prizes chart

### Create Prize (`/prizes/create`)
**Prize Form:**
- Name and description
- Image upload with preview
- Point cost (number input)
- Quantity available
- Prize type: Physical, Digital, Voucher, Experience
- Redemption instructions (rich text)
- Terms and conditions
- Expiration date (optional)

### Prize Management Table
- Active prizes with redemption stats
- Edit/deactivate prizes
- View redemption history
- Generate redemption codes

### Redemption Management (`/prizes/redemptions`)
- Table of redemption requests
- Pending, fulfilled, cancelled statuses
- Mark as fulfilled with tracking info
- Generate and send redemption codes
- Export redemption data

## 5. Admin Management (`/(org-admin)/admins`)

### Current Admins
- List of organization admins
- Role assignment dates
- Remove admin privileges (with confirmation)
- Admin activity logs

### Invite New Admin
- Email invitation form
- Role description and permissions
- Pending invitation status
- Resend invitation functionality
- Note: Requires super admin final approval

## Super Admin Data Validation Enhancement

## 6. Data Validation (`/(super-admin)/data-validation`)

### Submissions Review Dashboard
- Pending submissions count by task type
- Flagged submissions requiring attention
- Recent approvals/rejections stats
- Warning statistics

### Submission Review Interface (`/data-validation/pending`)
**Submission Display:**
- Task information context
- User submission data (formatted JSON display)
- Uploaded files (image viewer, document links)
- Location data (map display if provided)
- Submission timestamp

**Review Actions:**
- Approve submission (award points and badges)
- Reject with reason selection
- Flag for further review
- Issue warning to user
- Request additional information

### Warning Management (`/data-validation/warnings`)
**Warning System:**
- Warning types: Invalid Data, Spam, Inappropriate Content, Location Mismatch
- Severity levels: Low, Medium, High
- Automatic escalation after 3 warnings
- Warning history per user

**User Warning Interface:**
- Select warning type and severity
- Add detailed reason
- Points to revert (if any)
- Badges to revoke (if applicable)
- Auto-ban toggle for 3rd warning

### Flagged Content (`/data-validation/flagged`)
- Community reported submissions
- Auto-flagged by validation rules
- Bulk review actions
- Export flagged content reports

## Components to Create

### Form Components
```typescript
- MultiStepForm
- RichTextEditor  
- FileUploadZone
- LocationPicker
- FormFieldBuilder
- ValidationRuleBuilder
```

### Data Display Components
```typescript
- SubmissionViewer
- ImageGallery
- LocationMap
- ActivityTimeline
- StatCard
- ProgressChart
```

### Action Components
```typescript
- ApprovalWorkflow
- WarningDialog
- BulkActionToolbar
- ExportButton
- NotificationSender
```

## Mock Data Requirements

### Task Creation Data
```typescript
interface TaskFormData {
  basicInfo: {
    title: string
    description: string
    instructions: string
    category: string
    difficulty: 'easy' | 'medium' | 'hard'
    pointsReward: number
  }
  settings: {
    maxSubmissionsPerUser: number
    cooldownPeriodDays: number
    locationRequired: boolean
    targetLocation?: string
    locationRadiusKm?: number
    fileUploadRequired: boolean
    allowedFileTypes: string[]
    maxFileSizeMB: number
    maxFilesPerSubmission: number
  }
  customFields: FormField[]
  validationRules: ValidationRule[]
}
```

### Submission Review Data
```typescript
interface SubmissionReview {
  id: string
  taskId: string
  taskTitle: string
  userId: string
  userName: string
  submissionData: any
  attachments: FileAttachment[]
  location?: { lat: number; lng: number }
  submittedAt: string
  status: 'pending' | 'approved' | 'rejected' | 'flagged'
  reviewNotes?: string
  pointsAwarded?: number
}
```

## Features to Implement

### Task Creation Workflow
1. Multi-step form with progress indicator
2. Form validation and error handling
3. Auto-save functionality
4. Preview mode for user experience
5. Submit for approval with status tracking

### Member Management
1. Real-time member statistics
2. Activity tracking and engagement metrics
3. Member communication tools
4. Performance analytics

### Prize System
1. Prize creation with image handling
2. Redemption workflow automation
3. Inventory tracking
4. Analytics and reporting

### Data Validation System
1. Submission content review interface
2. File preview and download
3. Warning system with escalation
4. Bulk processing capabilities
5. Analytics on data quality

Create a comprehensive org admin experience with intuitive task creation, effective member management, and a robust prize system. The data validation system should be efficient for reviewing large volumes of submissions while maintaining data quality standards.
