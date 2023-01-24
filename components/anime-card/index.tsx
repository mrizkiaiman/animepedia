import * as React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

interface AnimeCardProps {
  score: number
  title: string
  img: string
  synopsis: string
  episodes: number
  rating: string
  id: number
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ score, title, img, synopsis, episodes, rating, id }) => {
  const animeURLDetail = `/anime/${id}`

  return (
    <motion.button whileHover={{ scale: 1.05 }}>
      <Link href={animeURLDetail}>
        <div className="rounded-lg flex lg:h-56 h-112 flex-col lg:flex-row items-center justify-between md:w-96 m-4 lg:m-8 shadow-lg p-6 cursor-pointer">
          <Image className="rounded-lg" src={img} height={200} width={150} alt={`${title}-img`} />
          <div className="w-full lg:w-3/4 lg:ml-8 mt-4 lg:mt-0">
            <p className="font-bold text-s">{title}</p>
            <div className="my-2">
              <p className="text-sm text-gray-500">
                <strong>Score:</strong> {score}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Episodes:</strong> {episodes}
              </p>
              <p className="text-sm font-bold text-gray-500">{rating}</p>
            </div>
            <p className="line-clamp-3 text-xs text-gray-500"> {synopsis}</p>
          </div>
        </div>
      </Link>
    </motion.button>
  )
}

export default AnimeCard
