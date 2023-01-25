import * as React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

interface YGOCardProps {
  name: string
  type: string
  race: string
  desc: string
  id: string
  img: string
}

export const YGOCard: React.FC<YGOCardProps> = ({ name, type, race, desc, img, id }) => {
  const ygoURLDetail = `/ygo/${id}`

  return (
    <motion.button whileHover={{ scale: 1.05 }}>
      <Link href={ygoURLDetail}>
        <div className="rounded-lg flex my-8 lg:my-4 lg:h-56 h-112 flex-col lg:flex-row items-center justify-between md:w-96 m-4 lg:m-8 shadow-lg p-6 cursor-pointer">
          <Image src={img} height={200} width={140} alt={`${name}-img`} priority />
          <div className="w-full lg:w-3/4 lg:ml-8 mt-4 lg:mt-0">
            <p className="line-clamp-2 font-bold">{name}</p>
            <div className="my-2">
              <p className="text-sm text-gray-500">
                <strong>Type:</strong> {type}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Race:</strong> {race}
              </p>
            </div>
            <p className="line-clamp-3 text-xs text-gray-500"> {desc}</p>
          </div>
        </div>
      </Link>
    </motion.button>
  )
}

export default YGOCard
