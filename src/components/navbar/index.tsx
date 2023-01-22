import * as React from 'react'
import { NAVBAR_MENU } from '@app/constants'

import { NavbarButtonMotion } from '@animations/NavbarButtonMotion'

import { FaMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'
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
          <div className="z-10 block items-center mb-6 md:mb-0">
            <FaSun className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
