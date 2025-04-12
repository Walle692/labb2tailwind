'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Listings', href: '/listings', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyNavbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-emerald-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="House Index"
                    src="/houseIcon.svg"
                    className="size-12"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className={classNames(
                            item.current ? 'bg-emerald-900 text-white' : 'text-gray-300 hover:bg-emerald-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium',
                          )}>
                            {item.name}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-emerald-900 text-white' : 'text-gray-300 hover:bg-emerald-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  <Link key={item.name} href={item.href} className={classNames(
                        item.current ? 'bg-emerald-900 text-white' : 'text-gray-300 hover:bg-emerald-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                        )}>
                            {item.name}
                    </Link>
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>

      </div>
    </>
  )
}