import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center flex-grow p-1 py-2 bg-amazon_blue'>
        <div className='flex items-center flex-grow mt-2 sm:flex-grow-0'>
          <Image
            className='cursor-pointer'
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit={'contain'}
          />
        </div>
        {/* Search bar */}
        <div className='items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 sm:flex'>
          <input
            className='flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none'
            type='text'
          />

          <SearchIcon className='h-12 p-4' />
        </div>
      </div>

      {/* Bottom Nav */}
      <div>bottom nav</div>
    </header>
  )
}

export default Header
