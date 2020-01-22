import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addCart} from '../../redux/cart/cart.action'
import './display-item.styles.scss';

const DisplayItem = ({item, addCart}) => { 
    
    const {name,price,imageUrl} = item
return (
    <div className='display-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='display-footer'>
    <span className='name'>{name}</span>
    <span className='price'> ${price}</span>
        </div>
        <CustomButton onClick={()=> addCart(item)} inverted > ADD TO BASKET</CustomButton>
    </div>
)};

//redux
const mapDispatchToProps = (dispatch) => ({
    addCart: (item) => dispatch(addCart(item))
})

export default connect(null, mapDispatchToProps) (DisplayItem);
