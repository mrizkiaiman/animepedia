import * as React from 'react'
import { NAVBAR_MENU } from '@app/constants'

import { NavbarButtonMotion } from '@app/components-wrapper/animations/NavbarButtonMotion'

import Image from 'next/image'
import { MobileViewMenu } from '@app/components/navbar/mobile-view-menu'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white px-8 md:px-52 py-6">
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <MobileViewMenu />
          <div className="md:flex items-center hidden z-10">
            {NAVBAR_MENU.map((item, index) => (
              <NavbarButtonMotion key={item.title}>
                <Link href={item.url}>
                  <p
                    className={`font-semibold px-5 py-2 rounded-xl m-2 text-md hover:bg-gray-700 hover:font-bold hover:text-white hover:dark:bg-zinc-50 hover:dark:text-gray-800`}>
                    {item.title}
                  </p>
                </Link>
              </NavbarButtonMotion>
            ))}
          </div>
          <a href="https://mrizkiaiman.com" target="_blank" rel="noopener noreferrer">
            <div className="z-10 block items-center">
              <Image src="/main/avatar-head-only.webp" alt="animepedia-icon" height={35} width={35} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar