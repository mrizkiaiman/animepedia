import { useQuery } from '@tanstack/react-query'
import { getAnimeDetail, getListAnime, getYGODetail, getYGOMagicianList } from '@app/services/main/api'
import { animeKeys, ygoKeys } from '@app/services/queryKeys'
import { AxiosError } from 'axios'
import { Anime } from '@app/types/jikanAPI/anime'
import { YGOCard } from '@app/types/ygoproAPI'
import { APIResponse } from '@app/types'

export const useAnimeList = (page: number) => {
  return useQuery<APIResponse<Anime[]>, AxiosError>(animeKeys.page(page), () => getListAnime(page))
}

export const useAnimeDetail = (id: string) => {
  return useQuery<APIResponse<Anime>, AxiosError>({
    queryKey: animeKeys.detail(id),
    queryFn: () => getAnimeDetail(id),
    enabled: !!id,
  })
}

export const useYGOMagicianList = () => {
  return useQuery<APIResponse<YGOCard[]>, AxiosError>(ygoKeys.all, () => getYGOMagicianList())
}

export const useYGODetail = (id: string) => {
  return useQuery<APIResponse<YGOCard[]>, AxiosError>({
    queryKey: ygoKeys.detail(id),
    queryFn: () => getYGODetail(id),
    enabled: !!id,
  })
}
