import * as React from 'react'
import Image from 'next/image'

export const Banner = () => (
  <div className="flex flex-col md:flex-row justify-center items-center pb-12">
    <Image src="/main/icon.webp" height={220} width={220} alt="animepedia-icon" />
    <div className="flex items-center justify-center flex-col">
      <p className="font-extrabold md:ml-8 text-4xl md:text-7xl tracking-tighter">Animepedia</p>
    </div>
  </div>
)
