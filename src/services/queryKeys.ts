export const animeKeys = {
  all: ['job'] as const,
  page: (page: number) => [...animeKeys.all, `page-${page}`] as const,
  details: () => [...animeKeys.all, 'detail'] as const,
  detail: (id: string) => [animeKeys.details(), id] as const,
}
