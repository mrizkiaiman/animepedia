import * as React from 'react'
import { GetServerSideProps } from 'next'
import { useAnimeList } from '@services/main/hooks'
import { HOME } from '@constants/seo'
import { filterToPDFdoc } from '@utils/filterToPDFdoc'
import { useRouter } from 'next/router'

import { Banner } from '@app/components/banner'
import { AnimeCard } from '@components/anime-card'
import { AnimeCardLoader } from '@app/components/anime-card/loader'
import { SEO } from '@components-wrapper/seo'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { ErrorPage } from '@components/error-page'
import { PaginationButtonMotion } from '@app/components-wrapper/animations/buttons/Pagination'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDFDocument } from '@components/pdf'

interface HomeProps {
  queryPage: number
}

export const Home: React.FC<HomeProps> = ({ queryPage }) => {
  const skeletonLoader = Array(12).fill('-')
  const [page, setPage] = React.useState<number>(queryPage ? queryPage : 1)
  const [didInit, setDidInit] = React.useState<boolean>(false)

  const router = useRouter()

  const { data, isLoading, error, isError } = useAnimeList(page)
  const list = data?.data || []
  const filteredDoc = React.useMemo(() => filterToPDFdoc(list), [list])

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      router.push(`/?page=${page - 1}`, undefined, { shallow: true })
    }
  }

  const onNextPage = () => {
    setPage(page + 1)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    router.push(`/?page=${page + 1}`, undefined, { shallow: true })
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
            <div className="cursor-pointer px-4 py-2 lg:px-12 lg:py-4 rounded-lg shadow-lg bg-gray-700" onClick={onPreviousPage}>
              <p className="text-white font-bold">Prev</p>
            </div>
          </PaginationButtonMotion>
          <p className="px-8 lg:px-24 text-lg lg:text-2xl font-bold">{page}</p>
          <PaginationButtonMotion>
            <div className="cursor-pointer px-4 py-2 lg:px-12 lg:py-4 rounded-lg shadow-lg bg-gray-700" onClick={onNextPage}>
              <p className="text-white font-bold">Next</p>
            </div>
          </PaginationButtonMotion>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { pagewoi } = context.query

  return { props: { pagewoi } }
}

export default Home
