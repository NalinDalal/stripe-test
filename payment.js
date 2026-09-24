const Stripe = require('stripe');
const stripe = Stripe('sk_test_123');

async function createPayment(amount, currency) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
  });

  return {
    id: paymentIntent.id,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    status: paymentIntent.status,
//     source: paymentIntent.source,
    client_secret: paymentIntent.client_secret,
  };
}

module.exports = { createPayment };
