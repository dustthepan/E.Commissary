import React from 'react';
import {connect} from 'react-redux';
import{withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import CustomButtom from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history}) => (
// if there are items in the cart, then render items in checkout
//if not render message
    <div className= 'cart-dropdown'>
        <div className ='cart-items'>
            { cartItems.length ?
                cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className='empty'>Currently, no items added</span>
                }
            </div>
            <CustomButtom onClick={()=> history.push('/checkout')}>CHECKOUT</CustomButtom>
    </div>
)

// memoize selector so that the dropdown component does not re-render when state changes that is unrelated to the cart items
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//used withRouter method to grab history prop from Router lib
export default withRouter(connect(mapStateToProps)(CartDropDown))