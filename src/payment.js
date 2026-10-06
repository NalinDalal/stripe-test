export function handlePayment(obj) {
  return { chargeFrom: obj.source, cents: parseInt(obj.amount, 10) };
}
