import { Anime } from '@app/types/jikanAPI/anime'
import { PDFDocumentProps } from '@app/components/pdf'

export const exportToPDF = (data: Anime[]) => {
  let result: Array<PDFDocumentProps> = data.map((item, index) => {
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
