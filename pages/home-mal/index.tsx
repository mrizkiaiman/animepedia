import * as React from 'react'
import { useAnimeListMAL } from '@services/main/hooks'
import { HOME } from '@constants/seo'
import { filterToPDFdoc } from '@utils/filterToPDFdoc'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Banner } from '@app/components/banner'
import { AnimeCard } from '@components/anime-card'
import { AnimeCardLoader } from '@app/components/anime-card/loader'
import { SEO } from '@components-wrapper/seo'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { ErrorPage } from '@components/error-page'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDFDocument } from '@components/pdf'
import { ExportPDFButtonLoader } from '@app/pages/home/loader'

interface HomeProps {
  queryPage: number
}

export const Home: React.FC<HomeProps> = ({ queryPage }) => {
  const skeletonLoader = Array(8).fill('-')
  const [page, setPage] = React.useState<number>(queryPage ? queryPage : 1)
  const [didInit, setDidInit] = React.useState<boolean>(false)

  const router = useRouter()

  const { data, isLoading, error, isError } = useAnimeListMAL()
  const list = data?.data || []
  const filteredDoc = React.useMemo(() => filterToPDFdoc(list), [list])

  React.useEffect(() => {
    if (!didInit) setDidInit(true)
  }, [])

  if (isError) return <ErrorPage message={error.message} />
  return (
    <>
      <SEO {...HOME} />
      <Banner />
      {/* {didInit && (
        <PDFViewer>
          <PDFDocument data={filteredDoc} page={page} />
        </PDFViewer>
      )} */}
      {didInit ? (
        isLoading ? (
          <ExportPDFButtonLoader />
        ) : (
          <PDFDownloadLink
            data-testid="export-pdf-button"
            document={<PDFDocument data={filteredDoc} page={page} />}
            fileName={`animepedia-page-${page}`}>
            <button className="transition ease-in-out hover:bg-yellow-500 duration-150 z-20 fixed shadow-lg bottom-6 md:bottom-12 right-6 md:right-14 flex justify-center items-center bg-indigo-900 py-3 h-12 w-44 rounded-lg cursor-pointer">
              <HiOutlineDocumentDownload className="text-white font-bold text-2xl" />
              <p className="font-bold text-white tracking-tight ml-2">Export to PDF</p>
            </button>
          </PDFDownloadLink>
        )
      ) : null}

      <div className="flex flex-wrap justify-center items-center">
        {isLoading ? skeletonLoader.map((_, index) => <AnimeCardLoader key={index} />) : list.map((item, index) => <p>{item.title}</p>)}
      </div>
    </>
  )
}

export default Home
