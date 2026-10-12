import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind classes safely with clsx and twMerge.
 * Prevents class collision and duplicate utilities.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
