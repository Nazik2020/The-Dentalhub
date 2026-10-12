export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: 'success' | 'error'
}

export interface NavLinkItem {
  label: string
  href: string
  isExternal?: boolean
}
