import { GET } from '@app/services/http'
import { APIResponse } from '../../types/index'
import { Anime } from '@app/types/jikanAPI/anime'

export const getListAnimeAPI = (page: number): Promise<APIResponse<Anime[]>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?type=tv&page=${page}&limit=12`)
}

export const getAnimeDetail = (id: string): Promise<APIResponse<Anime>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL}/anime/${id}`)
}
