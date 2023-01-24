export const animeKeys = {
  all: ['anime'] as const,
  page: (page: number) => [...animeKeys.all, `page-${page}`] as const,
  details: () => [...animeKeys.all, 'detail'] as const,
  detail: (id: string) => [animeKeys.details(), id] as const,
  mal: () => [...animeKeys.all, 'mal'] as const,
  detailsMAL: () => [animeKeys.mal(), 'detail'] as const,
  detailMAL: (id: string) => [animeKeys.detailsMAL(), id] as const,
}
