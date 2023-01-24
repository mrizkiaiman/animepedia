import { PDFDocumentYGOProps } from '@app/components/pdf'
import { YGOCard } from '@app/types/ygoproAPI'
import { filterToPDFdocYGOCard } from './filterToPDFdoc'

export const dynamicPDFYGOPage = (data: YGOCard[]) => {
  const divider = 55
  const totalArray = Math.ceil(data.length / divider)
  const result: Array<PDFDocumentYGOProps[]> = Array(totalArray).fill([])

  let arrayCounter = 0
  for (let i = 0; i < data.length; i++) {
    const item = {
      number: i + 1,
      id: data[i].id,
      name: data[i].name,
      type: data[i].type,
      race: data[i].race,
    }
    result[arrayCounter] = [...result[arrayCounter], item]
    if ((i + 1) % divider === 0) {
      arrayCounter++
    }
  }

  return result
}
