import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5)

  return (
    <div className='z-30 flex flex-col p-10 m-5 bg-white position'>
      <p className='text-xs italic text-gray-400 positioned top-2 right-2'>
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit='contain' />

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='my-2 text-xs line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <Currency quantity={price} />
      </div>
      {hasPrime && (
        <div className='flex -mt-5 space-x-2 secondary-center'>
          <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
