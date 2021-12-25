import { PORT, VERCEL_API_URL } from 'constants/api-constants'

export const getBaseUrl = () => {
  if (process.browser) return '' // Browser should use current path
  if (VERCEL_API_URL) return `https://${VERCEL_API_URL}` // ssr should use vercel

  return `http://localhost:${PORT ?? 3000}` // dev ssr should use localhost
}
