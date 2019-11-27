import React from 'react';
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
    </div>
);

export default DisplayItem;
