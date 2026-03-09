// Common TypeScript types for the starter template

/**
 * Generic API response type
 */
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number
  pageSize: number
  totalPages: number
  totalItems: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

/**
 * Paginated response type
 */
export interface PaginatedResponse<T> {
  data: T[]
  meta: PaginationMeta
}

/**
 * Navigation item type
 */
export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  external?: boolean
  disabled?: boolean
}

/**
 * Navigation section with grouped items
 */
export interface NavSection {
  title: string
  items: NavItem[]
}

/**
 * User type
 */
export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  role?: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
}

/**
 * Generic form field type
 */
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio'
  placeholder?: string
  required?: boolean
  disabled?: boolean
  options?: { label: string; value: string }[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

/**
 * Toast notification type
 */
export interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
  duration?: number
}

/**
 * Theme type
 */
export type Theme = 'light' | 'dark' | 'system'

/**
 * Sort direction
 */
export type SortDirection = 'asc' | 'desc'

/**
 * Sort option
 */
export interface SortOption {
  field: string
  direction: SortDirection
}

/**
 * Filter option
 */
export interface FilterOption {
  field: string
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith'
  value: string | number | boolean
}

/**
 * Table column definition
 */
export interface TableColumn<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
  className?: string
}

/**
 * Async state for data fetching
 */
export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

/**
 * Action result type for server actions
 */
export type ActionResult<T = void> =
  | { success: true; data: T }
  | { success: false; error: string }

/**
 * Utility type to make all properties optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * Utility type to extract array element type
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never

/**
 * Utility type for className prop
 */
export type WithClassName<T = object> = T & { className?: string }

/**
 * Utility type for children prop
 */
export type WithChildren<T = object> = T & { children?: React.ReactNode }
