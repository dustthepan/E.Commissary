import React from 'react'; 
import {connect} from 'react-redux';
import {removeItem} from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({item, removeItem}) => {

    const {name,price,quantity,imageUrl} = item

    return (
    <div className='checkout-item'>
        <div className = 'image-container'>
        <img src={imageUrl} alt ='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
        <span className='quantity'>{quantity}</span>
        <div className='remove' onClick={()=> removeItem(item)}>&#10006;</div>
    </div>
    )
    }

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem);