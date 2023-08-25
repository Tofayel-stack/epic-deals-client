import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({product}) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      // Trigger form validation and wallet collection
      const {error: submitError} = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }
  
      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const res = await fetch('/create-intent', {
        method: 'POST',
      });
  
      const {client_secret: clientSecret} = await res.json();
  
      const {error} = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      });
  
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        setErrorMessage('')
      }
    };
  
    return (
        <form onSubmit={handleSubmit} className='flex h-screen justify-center items-center'>
            <div>
                <h1 className='text-xl text-amber-800 font-semibold my-4'>Payment for {product.data.productName}</h1>
                <PaymentElement className='w-80 bg-slate-400 p-3 rounded' />
                <button className='btn btn-sm w-80 bg-amber-500 text-white' type="submit" disabled={!stripe || !elements}>
                Pay
                </button>
                {/* Show error message to your customers */}
                {errorMessage && <div>{errorMessage}</div>}
            </div>
        </form>
    );
};

export default CheckoutForm;