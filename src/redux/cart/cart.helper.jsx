// export const addItemToCart = (cartItems,addedItems) => {
//   const exists = cartItems.find(cartItem => cartItem.id === addedItems.id);

//   if (exists){
//     return cartItems.map(cartItem => cartItem.id === addedItems.id
//       ? {...cartItem, quantity: cartItem.quantity + 1}
//       : cartItem
//       )
//     }

//   return [...cartItems,{...addedItems, quantity:1}]
// };

export const addItemsToCart = (cartItems,addedItems) => {
  
  const exists = cartItems.find(
    cartItem => cartItem.id === addedItems.id
  );

  if (exists) {
    return cartItems.map(cartItem =>
      cartItem.id === addedItems.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
}

//quantity is now a prop of cartItems
return [...cartItems, {...addedItems, quantity: 1}];
};

export const quantityHandle = (cartItems,removedItems) => {

  const exists = cartItems.find(cartItem => cartItem.id === removedItems.id)

  if (exists.quantity === 1){
    cartItems.filter(cartItem => cartItem.id !== removedItems.id)
  }

  return cartItems.map(cartItem => cartItem.id === removedItems.id 
    ?
    {
      ...cartItems, quantity:cartItem.quantity-1
    } 
    : cartItem
  );
};