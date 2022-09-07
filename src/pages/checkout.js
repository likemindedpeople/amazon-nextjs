import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Head from 'next/head'

const Checkout = () => {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0 | Checkout</title>
      </Head>

      <Header />

      <main className='max-w-screen-xl mx-auto lg:flex'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src={'https://links.papareact.com/ikj'}
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            {/* will be changed with Redux */}
            <h1 className='pb-4 text-3xl border-b'>Your Shopping Basket</h1>
          </div>
          {/* Items Underneath post-Redux */}

          <div>
            <p>Items Underneath</p>
          </div>
        </div>

        {/* Right */}
        <div>
          <p>right</p>
        </div>
      </main>
    </div>
  )
}

export default Checkout
