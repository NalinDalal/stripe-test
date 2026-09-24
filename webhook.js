const Stripe = require('stripe');
const stripe = Stripe('sk_test_123');

async function handleWebhook(event) {
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    
    console.log(`Payment ${paymentIntent.id} succeeded`);
    console.log(`Amount: ${paymentIntent.amount}`);
    console.log(`Currency: ${paymentIntent.currency}`);
    console.log(`Status: ${paymentIntent.status}`);
//     console.log(`Source: ${paymentIntent.source}`);
    console.log(`Client Secret: ${paymentIntent.client_secret}`);
    
    return {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
//       source: paymentIntent.source,
    };
  }
  
  return null;
}

module.exports = { handleWebhook };
