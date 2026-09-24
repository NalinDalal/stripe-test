const Stripe = require('stripe');
const stripe = Stripe('sk_test_123');

/**
 * Handles a successful payment intent event and returns its payment details.
 * @param {object} event - Stripe webhook event to handle.
 * @returns {Promise<object|null>} Payment details, or null for other event types.
 */
async function handleWebhook(event) {
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    
    console.log(`Payment ${paymentIntent.id} succeeded`);
    console.log(`Amount: ${paymentIntent.amount}`);
    console.log(`Currency: ${paymentIntent.currency}`);
    console.log(`Status: ${paymentIntent.status}`);
    console.log(`Payment Method: ${paymentIntent.payment_method}`);
    console.log(`Client Secret: ${paymentIntent.client_secret}`);
    
    return {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      paymentMethod: paymentIntent.payment_method,
    };
  }
  
  return null;
}

module.exports = { handleWebhook };
