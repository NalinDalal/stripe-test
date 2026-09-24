const Stripe = require('stripe');
const stripe = Stripe('sk_test_123');

/**
 * Creates a payment intent and returns its payment details.
 * @param {number} amount - Amount in the currency's smallest unit.
 * @param {string} currency - Currency code for the payment.
 * @returns {Promise<object>} The payment intent details, including the payment method.
 */
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
    paymentMethod: paymentIntent.payment_method, // Added new field
    client_secret: paymentIntent.client_secret,
  };
}

module.exports = { createPayment };
