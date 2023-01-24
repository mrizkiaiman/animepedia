import { useQuery } from '@tanstack/react-query'
import { getAnimeDetail, getListAnime, getAnimeDetailFromMAL, getListAnimeFromMAL } from '@app/services/main/api'
import { animeKeys } from '@app/services/queryKeys'
import { AxiosError } from 'axios'
import { Anime } from '@app/types/jikanAPI/anime'
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

export const useAnimeListMAL = () => {
  return useQuery<APIResponse<Anime[]>, AxiosError>(animeKeys.mal(), () => getListAnimeFromMAL())
}

export const useAnimeDetailMAL = (id: string) => {
  return useQuery<APIResponse<Anime>, AxiosError>({
    queryKey: animeKeys.detailMAL(id),
    queryFn: () => getAnimeDetailFromMAL(id),
    enabled: !!id,
  })
}
