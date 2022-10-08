const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  const { items, email } = req.body

  // ! StripeInvalidRequestError: You cannot use
  // `line_items.amount`,
  // `line_items.currency`,
  // `line_items.name`,
  // `line_items.description`, or
  // `line_items.images` in this API version.
  // Please use `line_items.price` or `line_items.price_data`.
  // Please see https://stripe.com/docs/payments/checkout/migrating-prices for more information.
  // * solved for now by not sending the item.description to Stripe

  // ! StripeInvalidRequestError: You cannot use
  // `shipping_rates` to specify the shipping rate to apply to this Session in this API version.
  // Please use the `shipping_options` parameter.
  // * solved for now by not sending the shipping_rates to Stripe

  const transformedItems = items.map((item) => ({
    // description: item.description,
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }))

  const session = await stripe.checkout.sessions.create({
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    mode: 'payment',
    payment_method_types: ['card'],
    // shipping_rates: ['shr_1LqKZbBfu82m6Bh6mYgGvOnw'],
    shipping_address_collection: {
      allowed_countries: ['US', 'GB', 'CA'],
    },
    line_items: transformedItems,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  })

  res.status(200).json({ id: session.id })
}
