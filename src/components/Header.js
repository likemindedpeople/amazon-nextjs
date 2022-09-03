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
      {/* Top nav */}
      <div className='flex flex-grow p-1 py-2 secondary-center bg-amazon_blue'>
        {/* Amazon image */}
        <div className='flex flex-grow mt-2 secondary-center sm:flex-grow-0'>
          <Image
            className='cursor-pointer'
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit={'contain'}
          />
        </div>
        {/* Search bar */}
        <div className='flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer secondary-center hover:bg-yellow-500 sm:flex'>
          <input
            className='flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none'
            type='text'
          />

          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className='flex mx-6 space-x-6 text-xs text-white whitespace-nowrap secondary-center'>
          <div className='cursor-pointer'>
            <p>Hi Danny</p>
            <p>Account & Lists</p>
          </div>
          <div className='cursor-pointer'>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className='cursor-pointer'>
            <ShoppingCartIcon className='h-10' />
            <p>Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div>bottom nav</div>
    </header>
  )
}

export default Header
