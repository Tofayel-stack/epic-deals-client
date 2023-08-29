import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContextElements';
import { toast } from 'react-hot-toast';

// here will add style css

const CheckoutForm = ({product}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext)
  
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret,setClientSecret] = useState()
    const [processing,setProcessing] = useState(false)
    const [transactionID,setTransactionID] = useState('')




  const productData = product.data;
  useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
      method:'post',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(productData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setClientSecret(data.clientSecret)
    })
  },[productData])
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
     
      if (!stripe || !elements) {
        return;
      }
     

    const card = elements.getElement(CardElement);
    if (card == null) {
      console.log('card null');
      return;
    }



      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      
    if (error) {
      console.log('[error]', error);
      setErrorMessage(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setErrorMessage('')
    }


    setProcessing(true)

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName  || 'anonymous',
            email: user.email || 'unknown'
          },
        },
      },
    );

    if(confirmError){
      // setErrorMessage(confirmError.message)
      console.log(confirmError);
    }
    setProcessing(false)
    if(paymentIntent.status === 'succeeded'){
     
      setTransactionID(paymentIntent.id)
      // save the paid data in database

      const payment = {
          buyerName: user.displayName,
          buyerEmail: user.email,
          transactionID: paymentIntent.id,
          date: new Date(),
          purchasedProduct: productData,
          status:'service is pending ! '

      }


      fetch('http://localhost:5000/paidProduct',{
        method:'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.acknowledged){
          toast.success('payment done 😊')
          console.log(data);
        }
        

      })


    }



    };
  
    return (
        <form onSubmit={handleSubmit} className='flex h-screen justify-center items-center'>
            <div>
                <h1 className='text-xl text-amber-800 font-semibold my-4'>Payment for {product.data.productName}</h1>
                <h2 className='text-base text-amber-400'>you gonna pay {product.data.price}</h2>
                 <CardElement className='w-full h-80 bg-zinc-100 p-4 rounded'
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                          invalid: {
                            color: '#9e2146',
                          },
                        },
                      }}
                    />
                  
                <button className='btn btn-sm w-80 bg-amber-500 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
                </button>
                {/* Show error message to your customers */}
                {errorMessage && <div>{errorMessage}</div>}
                {transactionID && <div className='text-green-500'>Payment successful</div>}
                {transactionID && <div className='text-slate-500 font-semibold'>Transaction ID : <span className='text-amber-700 text-sm'>{transactionID}</span></div>}
            </div>
        </form>
    );
};

export default CheckoutForm;