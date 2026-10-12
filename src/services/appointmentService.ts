import {
  AppointmentBookingPayload,
  AppointmentBookingConfirmation,
} from '@/types/appointment'
import { ApiResponse } from '@/types/common'

export class AppointmentService {
  /**
   * Submits patient booking request to clinical triage queue.
   */
  static async requestBooking(
    payload: AppointmentBookingPayload
  ): Promise<ApiResponse<AppointmentBookingConfirmation>> {
    // In production: return apiClient.post<AppointmentBookingConfirmation>('/appointments', payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            bookingId: `DHG-${Math.floor(100000 + Math.random() * 900000)}`,
            createdAt: new Date().toISOString(),
            status: 'pending',
            payload,
          },
          error: null,
          status: 'success',
        })
      }, 600)
    })
  }
}
