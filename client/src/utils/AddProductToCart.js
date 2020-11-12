export const addProductToCart = (cartItems, item) => {
  const isItemExist = cartItems.find(
    (product) => product._id === item._id
  );

  if (isItemExist) {
    const subtotal = cartItems.reduce((accu, product) => {
      accu + product.qty * product.price;
    }, 0);

    return subtotal;
  }
};
