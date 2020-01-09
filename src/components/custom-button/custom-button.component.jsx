import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, inverted, ...otherParts}) => {
return (
    <button className ={`${inverted} ? 'inverted' : ''} {${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherParts}>
        {children}
    </button>
 
)

    
}
export default CustomButton