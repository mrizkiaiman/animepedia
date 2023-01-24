import { GET } from '@app/services/http'
import { AxiosResponse } from 'axios'
import { APIResponse } from '../../types/index'
import { Anime } from '@app/types/jikanAPI/anime'

export const getListAnime = (page: number): Promise<APIResponse<Anime[]>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?type=tv&page=${page}&limit=24`)
}

export const getAnimeDetail = (id: string): Promise<APIResponse<Anime>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL}/anime/${id}`)
}

export const getListAnimeFromMAL = (): Promise<APIResponse<Anime[]>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL_MAL}/anime/ranking?limit=100`, {
    'X-MAL-CLIENT-ID': process.env.NEXT_PUBLIC_API_URL_MAL_CLIENTID,
    'content-type': 'application/json; charset=UTF-8',
  })
}

export const getAnimeDetailFromMAL = (id: string): Promise<APIResponse<Anime>> => {
  return GET(`${process.env.NEXT_PUBLIC_API_URL_MAL}/anime/${id}`, { 'X-MAL-CLIENT-ID': process.env.NEXT_PUBLIC_API_URL_MAL_CLIENTID })
}
