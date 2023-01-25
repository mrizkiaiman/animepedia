import * as React from 'react'
import { useYGOMagicianList } from '@services/main/hooks'
import { HOME_YGO } from '@constants/seo'
import { dynamicPDFYGOPage } from '@app/utils/dynamicPDFPage'

import { Banner } from '@app/components/banner'
import { YGOCard } from '@components/ygo-card'
import { AnimeCardLoader } from '@app/components/anime-card/loader'
import { SEO } from '@components-wrapper/seo'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { ErrorPage } from '@components/error-page'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDFDocumentYGO } from '@components/pdf'
import { ExportPDFButtonLoader } from '@app/pages/home/loader/ExportPDFButton'

export const HomeYGO = () => {
  const skeletonLoader = Array(8).fill('-')
  const [didInit, setDidInit] = React.useState<boolean>(false)

  const { data, isLoading, error, isError } = useYGOMagicianList()
  const list = data?.data || []
  const filteredDoc = React.useMemo(() => dynamicPDFYGOPage(list), [list])

  React.useEffect(() => {
    if (!didInit) setDidInit(true)
  }, [])

  if (isError) return <ErrorPage message={error.message} />
  return (
    <>
      <SEO {...HOME_YGO} />
      <Banner />
      {didInit &&
        (isLoading ? (
          <ExportPDFButtonLoader />
        ) : (
          <PDFDownloadLink data-testid="export-pdf-button" document={<PDFDocumentYGO data={filteredDoc} />} fileName={`ygo-magicians-list`}>
            <button className="transition ease-in-out hover:bg-yellow-500 duration-150 z-20 fixed shadow-lg bottom-6 md:bottom-12 right-6 md:right-14 flex justify-center items-center bg-indigo-900 py-3 h-12 w-44 rounded-lg cursor-pointer">
              <HiOutlineDocumentDownload className="text-white font-bold text-2xl" />
              <p className="font-bold text-white tracking-tight ml-2">Export to PDF</p>
            </button>
          </PDFDownloadLink>
        ))}
      <div className="flex flex-wrap justify-center items-center">
        {isLoading
          ? skeletonLoader.map((_, index) => <AnimeCardLoader key={index} />)
          : list.map((item, index) => (
              <YGOCard
                key={item.id}
                id={item.id}
                img={item.card_images[0].image_url}
                desc={item.desc}
                name={item.name}
                race={item.race}
                type={item.type}
              />
            ))}
      </div>
    </>
  )
}

export default HomeYGO
