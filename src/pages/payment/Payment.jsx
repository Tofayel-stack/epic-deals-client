import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {


  const product = useLoaderData()
  console.log(product);


    const stripePromise = loadStripe('pk_test_51NT9CXKsYUuM4tCtWLJb2eEDxsgCu5GNAvwRNndJCwNb8oPcBSABsXkIwsvjo66SqnullMD21wZ1K11DnlYtX5gr00HGNbsDub');

    const options = {
      mode: 'payment',
      amount: 1099,
      currency: 'usd',
      // Fully customizable with appearance API.
      appearance: {
        /*...*/
      },
    };
    return (
        <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm product={product} />
            </Elements>
        </div>
    );
};

export default Payment;