import React from 'react';
import DisplayItem from '../display-item/display-item.component';
import './display.styles.scss';

const Display = ({title, items}) => (
    <div className ='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                <DisplayItem key={id}{ ...itemProps} />
                ))
                
            }
        </div>
    </div>
)

export default Display;