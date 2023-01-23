import { AxiosRequestConfig } from 'axios'
import axios from 'axios'

import { APIResponse } from '../types/index'

export const GET = async <T = APIResponse>(
  url: string,
  headers?: { [key: string]: any },
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  const { data } = await axios.get(url, {
    ...(config ?? {}),
    headers,
  })
  return data
}
