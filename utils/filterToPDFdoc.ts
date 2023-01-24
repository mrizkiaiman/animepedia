import { Anime } from '@app/types/jikanAPI/anime'
import { YGOCard } from '@app/types/ygoproAPI'
import { PDFDocumentAnimeProps, PDFDocumentYGOProps } from '@app/components/pdf'

export const filterToPDFdocAnime = (data: Anime[]) => {
  let result: Array<PDFDocumentAnimeProps> = data.map((item, index) => {
    return {
      number: index + 1,
      title: item.title,
      score: item.score,
      episodes: item.episodes,
      status: item.status,
    }
  })

  return result
}

export const filterToPDFdocYGOCard = (data: YGOCard[]) => {
  let result: Array<PDFDocumentYGOProps> = data.map((item, index) => {
    return {
      number: index + 1,
      id: item.id,
      name: item.name,
      type: item.type,
      race: item.race,
    }
  })

  return result
}
