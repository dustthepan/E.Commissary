import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './display-item.styles.scss';

const DisplayItem = ({id,name,imageUrl,price}) => (
    <div className='display-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='display-footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
        </div>
        <CustomButton inverted >ADD TO CART</CustomButton>
    </div>
);

export default DisplayItem;
