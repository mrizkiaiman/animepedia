import * as React from 'react'
import { useAnimeList } from '@app/services/main/hooks'
import { HOME } from '@app/constants/seo'

import Image from 'next/image'
import { AnimeCard } from '@components/anime-card'
import { AnimeCardLoader } from '@app/components/anime-card/loader'
import { SEO } from '@components-wrapper/seo'

const Home = () => {
  const skeletonLoader = Array(12).fill('-')
  const [page, setPage] = React.useState<number>(1)

  const { data, isLoading } = useAnimeList(page)
  const list = data?.data || []

  const onPreviousPage = () =>
    setPage(page => {
      if (page > 1) return page - 1
      else return page
    })
  const onNextPage = () => setPage(page => page + 1)

  return (
    <>
      <SEO {...HOME} />
      <div className="flex flex-col md:flex-row justify-center items-center pb-12">
        <Image src="/main/icon.webp" height={200} width={200} alt="animepedia-icon" />
        <p className="font-extrabold md:ml-8 text-4xl md:text-7xl tracking-tighter">Animepedia</p>
      </div>
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
          <div className="cursor-pointer px-4 py-2 lg:px-12 lg:py-4 rounded-lg shadow-lg bg-gray-700" onClick={onPreviousPage}>
            <p className="text-white font-bold">Prev</p>
          </div>
          <p className="px-8 lg:px-24 text-lg lg:text-2xl font-bold">{page}</p>
          <div className="cursor-pointer px-4 py-2 lg:px-12 lg:py-4 rounded-lg shadow-lg bg-gray-700" onClick={onNextPage}>
            <p className="text-white font-bold">Next</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
