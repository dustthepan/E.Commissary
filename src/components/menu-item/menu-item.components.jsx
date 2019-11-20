import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

//destructuring needed for withRouter to allow access to outside props
const MenuItem = ({size,title,history,match,imageUrl,linkUrl}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image' 
            style= {{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>BUY NOW</span>
            </div>
    </div>
);

export default withRouter(MenuItem); // allows access to history location match 