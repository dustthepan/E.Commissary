import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => {
    const stripePricing = price * 100;
   //const stripePublishSecret = 'sk_test_n0CxuXodCZOFhIjnKTZ2k9ia00mPYbe3wg';
    //secret key replace with real later
    const stripePublishPublic = 'pk_test_FtKKsOqJWB24se5zC9qxwnOc00dAnkVJT3';
    //public key


//mock token to implement backend later

const onCurrency = token => {
    console.log(token);
    alert('Payment Received')
}

return (
    <StripeCheckout
    label='Please Make Payment'
    name='PHARM-EC'

    billingAddress
    shippingAddress
    image="images/pharmicon.svg"
    description={`Complete Total $${price}`}
    amount={stripePricing}
    panelLabel= "Make A Payment"
    token={onCurrency}
    stripeKey={stripePublishPublic}
    />
    )
};

export default StripeButton;