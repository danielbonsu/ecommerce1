export const cartTotals = (cartItems) => {
  const qtyReducer = (qtyACC, item) =>
    qtyACC + Number(item.qty);

  const qtyTotals = cartItems.reduce(qtyReducer, 0);

  const totalAmountReducer = (priceACC, item) =>
    priceACC + Number(item.price) * Number(item.qty);

  const totalPrice = cartItems.reduce(
    totalAmountReducer,
    0
  );

  console.log(qtyTotals, totalPrice);
  return {
    qtyTotals,
    totalPrice,
  };
};
