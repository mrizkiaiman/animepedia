import { useQuery } from '@tanstack/react-query'
import { getAnimeDetail, getListAnimeAPI } from '@app/services/main/api'
import { animeKeys } from '@app/services/queryKeys'

export const useAnimeList = (page: number) => {
  return useQuery(animeKeys.page(page), () => getListAnimeAPI(page))
}

export const useAnimeDetail = (id: string) => {
  return useQuery(animeKeys.detail(id), () => getAnimeDetail(id))
}
