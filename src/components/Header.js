import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

const Header = () => {
  const { data: session } = useSession()
  const items = useSelector(selectItems)

  return (
    <header>
      {/* Top nav */}
      <div className='flex flex-grow p-1 py-2 secondary-center bg-amazon_blue'>
        {/* Amazon image */}
        <Link href='/'>
          <div className='flex flex-grow mt-2 secondary-center sm:flex-grow-0'>
            <Image
              className='cursor-pointer'
              src='https://links.papareact.com/f90'
              width={150}
              height={40}
              objectFit={'contain'}
            />
          </div>
        </Link>
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
          <div className='link' onClick={!session ? signIn : signOut}>
            <p>{session ? `Hi, ${session.user.name}` : `Sign In`}</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <Link href='/checkout'>
            <div className='flex position link secondary-center'>
              {/* pulls number from Redux */}
              <span className='top-0 right-0 w-4 h-4 font-bold text-center bg-yellow-400 rounded-full positioned md:right-10 text-amazon_blue'>
                {items.length}
              </span>
              <ShoppingCartIcon className='h-10' />
              <p className='hidden mt-2 font-extrabold md:text-sm md:shown'>
                Basket
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom nav */}
      <div className='flex p-2 pl-6 space-x-3 text-sm text-white secondary-center bg-amazon_blue-light'>
        <p className='flex link secondary-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden link lg:inline'>Electronics</p>
        <p className='hidden link lg:inline'>Food & Grocery</p>
        <p className='hidden link lg:inline'>Prime</p>
        <p className='hidden link lg:inline'>Buy Again</p>
        <p className='hidden link lg:inline'>Shopper Toolkit</p>
        <p className='hidden link lg:inline'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
