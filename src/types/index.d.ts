export interface APIResponse<T = any> {
  status?: string
  code?: string
  response: T
  message?: string
}
