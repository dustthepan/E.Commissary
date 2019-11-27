import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherParts}) => (

    <button className ={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherParts}>
        {children}
    </button>
);

export default CustomButton;