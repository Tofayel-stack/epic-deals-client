import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {


    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

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
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;