import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherParts}) => {
return (
    <button className ={`${isGoogleSignIn ? 'google-sign-in' : 'face-sign-in'} custom-button`} {...otherParts}>
        {children}
    </button>
 
)

    
}
export default CustomButton