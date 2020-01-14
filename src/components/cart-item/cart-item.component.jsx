import React from 'react';

const CartItem = ({item:{name,price,quantity,imageUrl}}) => (
<div className ='cart-item'>
    <img src={imageUrl} alt ='item'/>
    <div className ='item-details'>
        <span className ='name'>{name}</span>
<span className ='item'>{price} x {quantity}</span>
    </div>
</div>
)

export default CartItem
