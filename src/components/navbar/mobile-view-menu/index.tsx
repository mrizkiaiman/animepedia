import * as React from 'react'
import { Transition, Popover } from '@headlessui/react'
import Link from 'next/link'
import { NAVBAR_MENU } from '@app/constants'

import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

export const MobileViewMenu = () => {
  return (
    <div className="h-11 md:hidden z-10">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              {open ? <IoMdClose className="block md:hidden text-2xl" /> : <HiMenu className="block md:hidden text-2xl" />}
            </Popover.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Popover.Panel className="mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {NAVBAR_MENU.map((item, index) => (
                  <Link key={item.title} href={item.url}>
                    <div className="px-6 py-4">
                      <p>{item.title}</p>
                    </div>
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default MobileViewMenu
