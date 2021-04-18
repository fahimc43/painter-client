import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IeHDFF1RuTFSQYuOnMx2TJSaU6RSDVLOfgXQemHk5HGQGHPTsctrk717JtBbxqhQGTsHN4Qsgrie8jhbxRlfD6W00jrzzgCvr');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                                border: '1px solid black'
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
        </Elements>
    );
};

export default ProcessPayment;