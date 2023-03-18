import * as React from 'react'
import { MAIN_TOOLS } from '@app/constants'
import { ABOUT } from '@app/constants/seo'

import Image from 'next/image'
import { SEO } from '@components-wrapper/seo'

const Info = (props: { value: string }) => (
  <li>
    <p className="font-semibold">{props.value}</p>
  </li>
)

const About = () => {
  return (
    <div>
      <SEO {...ABOUT} />
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-12">
          <p className="text-center lg:text-left text-4xl lg:text-7xl font-extrabold tracking-tighter">Animepedia</p>
          <p className="text-center lg:text-left text-xl lg:text-3xl font-bold tracking-tighter mt-6">
            Download data based on
            <a href="https://jikan.moe/" className="mx-1 italic text-gray-500">
              Jikan - MyAnimeList API
            </a>{' '}
            to .pdf file
          </p>
        </div>
        <Image src="/about/mascot.webp" width={600} height={600} alt="animepedia-mascot" priority />
      </div>
      <div className="mt-12">
        <p className="text-2xl font-extrabold tracking-tighter underline">Built with:</p>
        <div className="pt-4">
          <ul className="list-disc pl-6">
            {MAIN_TOOLS.map(item => (
              <Info key={item.value} value={item.value} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
