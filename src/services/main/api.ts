import config from '@app/config.json'
import { GET } from '@app/services/http'
import { APIResponse } from '../../types/index'
import { Anime } from '@app/types/jikanAPI/anime'

export const getListAnimeAPI = (page: number): Promise<APIResponse<Anime[]>> => {
  return GET(`${config.api}/top/anime?type=tv&page=${page}&limit=12`)
}

export const getAnimeDetail = (id: string): Promise<APIResponse<Anime>> => {
  return GET(`${config.api}/anime/${id}`)
}
