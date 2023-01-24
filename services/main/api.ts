import { GET } from '@app/services/http'
import { APIResponse } from '../../types/index'
import { Anime } from '@app/types/jikanAPI/anime'
import { YGOCard } from '@app/types/ygoproAPI'

export const getListAnime = (page: number): Promise<APIResponse<Anime[]>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?type=tv&page=${page}&limit=24`)
}

export const getAnimeDetail = (id: string): Promise<APIResponse<Anime>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL}/anime/${id}`)
}

export const getYGOMagicianList = (): Promise<APIResponse<YGOCard[]>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL_YGO}?&fname=Magician`)
}

export const getYGODetail = (id: string): Promise<APIResponse<YGOCard[]>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL_YGO}?id=${id}`)
}
