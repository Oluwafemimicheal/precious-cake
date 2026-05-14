export function priceFormat(price) {
  const nigeriaCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  return nigeriaCurrency
}