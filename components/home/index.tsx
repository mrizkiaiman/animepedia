import * as React from 'react'
import { useAnimeList } from '@app/services/main/hooks'
import { HOME } from '@app/constants/seo'
import { filterToPDFdoc } from 'utils/filterToPDFdoc'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { PDFDocument } from '@components/pdf'

import { Banner } from '@app/components/banner'
import { AnimeCard } from '@components/anime-card'
import { AnimeCardLoader } from '@app/components/anime-card/loader'
import { SEO } from '@components-wrapper/seo'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { ErrorPage } from '@components/error-page'
import { PaginationButtonMotion } from '@app/components-wrapper/animations/buttons/Pagination'

const Home = () => {
  const skeletonLoader = Array(12).fill('-')
  const [page, setPage] = React.useState<number>(1)
  const [didInit, setDidInit] = React.useState<boolean>(false)

  const { data, isLoading, error, isError } = useAnimeList(page)
  const list = data?.data || []
  const filteredDoc = React.useMemo(() => filterToPDFdoc(list), [list])

  const onPreviousPage = () => {
    setPage(page => {
      if (page > 1) return page - 1
      else return page
    })
    window.scrollTo(0, 0)
  }
  const onNextPage = () => {
    setPage(page => page + 1)
    window.scrollTo(0, 0)
  }

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
      {didInit && (
        <PDFDownloadLink document={<PDFDocument data={filteredDoc} page={page} />} fileName={`animepedia-page-${page}`}>
          <button className="transition ease-in-out hover:bg-yellow-500 duration-150 z-20 fixed shadow-lg bottom-6 md:bottom-12 right-6 md:right-14 flex justify-center items-center bg-indigo-900 py-3 w-44 rounded-lg cursor-pointer">
            <HiOutlineDocumentDownload className="text-white font-bold text-2xl" />
            <p className="font-bold text-white tracking-tight ml-2">Export to PDF</p>
          </button>
        </PDFDownloadLink>
      )}

      <div className="flex flex-wrap justify-center items-center">
        {isLoading
          ? skeletonLoader.map((_, index) => <AnimeCardLoader key={index} />)
          : list.map((item, index) => (
              <AnimeCard
                key={item.mal_id}
                id={item.mal_id}
                episodes={item.episodes}
                img={item.images.webp?.image_url || item.images.jpg.image_url}
                rating={item.rating}
                score={item.score}
                synopsis={item.synopsis}
                title={item.title}
              />
            ))}
        <div className="w-1/2 flex items-center justify-center my-12">
          <PaginationButtonMotion>
            <button className="cursor-pointer px-4 py-2 lg:px-12 lg:py-4 rounded-lg shadow-lg bg-gray-700" onClick={onPreviousPage}>
              <p className="text-white font-bold">Prev</p>
            </button>
          </PaginationButtonMotion>
          <p className="px-8 lg:px-24 text-lg lg:text-2xl font-bold">{page}</p>
          <PaginationButtonMotion>
            <button className="cursor-pointer px-4 py-2 lg:px-12 lg:py-4 rounded-lg shadow-lg bg-gray-700" onClick={onNextPage}>
              <p className="text-white font-bold">Next</p>
            </button>
          </PaginationButtonMotion>
        </div>
      </div>
    </>
  )
}

export default Home
