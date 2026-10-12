import { ApiResponse } from '@/types/common'

/**
 * SADP Base API Client Facade
 * Provides standardized request handling, error boundaries, and response mapping.
 */
class ApiClient {
  private baseUrl: string

  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`)
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const data = await response.json()
      return { data, error: null, status: 'success' }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown network failure'
      return { data: null, error: errorMessage, status: 'error' }
    }
  }

  async post<T, B = unknown>(endpoint: string, body: B): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const data = await response.json()
      return { data, error: null, status: 'success' }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown network failure'
      return { data: null, error: errorMessage, status: 'error' }
    }
  }
}

export const apiClient = new ApiClient()
