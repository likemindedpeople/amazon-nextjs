import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key)

const Checkout = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const { data: session } = useSession()

  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    // Call the backend to create a checkout session...
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items,
      email: session.user.email,
    })

    // Redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result.error) alert(result.error.message)
  }

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
            <h1 className='pb-4 text-3xl border-b'>
              {items.length === 0
                ? 'Your Shopping basket is empty :('
                : 'Your Shopping Basket'}
            </h1>

            {/* Checkout Products */}
            {items.map(
              (
                {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                  hasPrime,
                },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                  hasPrime={hasPrime}
                />
              )
            )}
          </div>
        </div>

        {/* Right */}
        {items.length > 0 && (
          <div className='flex flex-col p-10 bg-white shadow-md'>
            <h2 className='whitespace-nowrap'>
              Subtotal ({items.length} items):
              <span className='ml-1 font-bold'>
                <Currency quantity={total} />
              </span>
            </h2>
            <button
              className={`button mt-2 ${
                !session &&
                'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!session}
              role='link'
              onClick={createCheckoutSession}
            >
              {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default Checkout
