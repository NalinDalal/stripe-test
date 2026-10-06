export function handlePayment(obj) {
  return { chargeFrom: obj.source, cents: obj.amount };
}
