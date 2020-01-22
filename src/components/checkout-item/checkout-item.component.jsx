import React from 'react'; 
import {connect} from 'react-redux';
//import {removeItem} from '../../redux/cart/cart.action';
import {addCart,removeItem,toggleQuantity} from '../../redux/cart/cart.action'
import './checkout-item.styles.scss';


const CheckoutItem = ({item, addCart, removeItem,toggleQuantity}) => {

    const {name,price,quantity,imageUrl} = item

    return (
    <div className='checkout-item'>
        <div className = 'image-container'>
        <img src={imageUrl} alt ='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
        <span className='quantity'>
            <div className='arrow'onClick={()=>toggleQuantity(item)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> addCart(item)}>&#10095;</div>
            </span>
        <div className='remove' onClick={()=> removeItem(item)}>&#10006;</div>
    </div>
    )
    }

const mapDispatchToProps = dispatch => ({
    addCart: item => dispatch(addCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    toggleQuantity: amount => dispatch(toggleQuantity(amount))
})


export default connect(null,mapDispatchToProps)(CheckoutItem);