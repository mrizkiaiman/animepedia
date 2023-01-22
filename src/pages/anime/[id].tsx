import * as React from 'react'
import { useRouter } from 'next/router'
import { useAnimeDetail } from '@app/services/main/hooks'

import Image from 'next/image'
import Head from 'next/head'
import { PageLoader } from '@components/page-loader'
import { HiOutlinePrinter } from 'react-icons/hi'
import { ErrorPage } from '@components/error-page'

const Info = (props: { title: string; value: string | number }) => (
  <p className="text-gray-500">
    <strong>{props.title}:</strong> {props.value}
  </p>
)

const Genre = (props: { value: string }) => (
  <div className="mt-3 md:mt-0 px-4 mr-3 py-2 shadow-lg rounded-lg flex items-center justify-center bg-gray-700">
    <p className="text-white font-bold">{props.value}</p>
  </div>
)

export const AnimeDetail = () => {
  const router = useRouter()
  const { id, action } = router.query
  const animeId = id as string

  const { data, isLoading, isError, error } = useAnimeDetail(animeId)
  const animeData = data?.data
  const image = data?.data.images.webp?.large_image_url || data?.data.images.jpg.large_image_url
  const title = data?.data.title

  const [isImageLoaded, setIsImageLoaded] = React.useState<boolean>(false)
  const enablePrint = Boolean(action === 'print' && isLoading === false && isImageLoaded === true)
  const printURLpath = router.asPath.includes('print') ? '' : `${router.asPath}/?action=print`

  const pageTitle = isLoading ? 'Loading . . .' : `${title} - Animepedia`

  React.useEffect(() => {
    if (enablePrint) window.print()
  }, [isLoading, isImageLoaded])

  if (isError) return <ErrorPage message={error.message} />

  return isLoading ? (
    <PageLoader />
  ) : (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col md:flex-row justift-center items-center py-12">
        <div>
          {image && (
            <Image
              priority
              onLoad={() => setIsImageLoaded(true)}
              className="rounded-lg"
              src={image}
              height={350}
              width={250}
              alt={`${title}-img`}
            />
          )}
          <a href={printURLpath} rel="noopener noreferrer" target="_blank">
            <div className="py-4 mt-4 px-2 rounded-lg bg-yellow-500 flex items-center justify-center cursor-pointer">
              <HiOutlinePrinter className="text-white text-2xl" />
              <p className="md:ml-4 font-extrabold text-xl text-white">Print</p>
            </div>
          </a>
        </div>
        <div className="md:ml-8 mt-8 md:mt-0 p-8 shadow-lg rounded-lg w-full">
          <p className="text-xl font-bold">{title}</p>
          <div className="pt-4">
            <Info title="Score" value={animeData?.score || '-'} />
            <Info title="Episodes" value={animeData?.episodes || '-'} />
            <Info title="Status" value={animeData?.status || '-'} />
            <Info title="Source" value={animeData?.source || '-'} />
            <p className="font-bold text-gray-500">{animeData?.rating}</p>
            <div className="flex mt-6 flex-wrap">
              {animeData?.genres.map((item, index) => (
                <Genre key={index} value={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 shadow-lg rounded-lg w-full mt-16">
        <p className="font-bold text-lg md:text-2xl text-gray-600">Synopsis:</p>
        <p className="text-gray-500 pt-8 text-sm md:text-base text-justify">{animeData?.synopsis || '-'}</p>
      </div>
    </>
  )
}

export default AnimeDetail
