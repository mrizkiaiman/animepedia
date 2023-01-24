import { useQuery } from '@tanstack/react-query'
import { getAnimeDetail, getListAnime } from '@app/services/main/api'
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
