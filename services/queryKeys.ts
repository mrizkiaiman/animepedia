export const animeKeys = {
  all: ['anime'] as const,
  page: (page: number) => [...animeKeys.all, `page-${page}`] as const,
  details: () => [...animeKeys.all, 'detail'] as const,
  detail: (id: string) => [animeKeys.details(), id] as const,
}

export const ygoKeys = {
  all: ['ygo'] as const,

  details: () => [...ygoKeys.all, 'detail'] as const,
  detail: (id: string) => [ygoKeys.details(), id] as const,
}
