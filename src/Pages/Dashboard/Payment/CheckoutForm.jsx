import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements){
        return 
    }
    const card = elements.getElement(CardElement)
    if (card == null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card', 
        card
    })

    if(error){
        console.log('payment error', error)
    }
    else{
        console.log('payment method', paymentMethod)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="m-20 p-4 border-2 border-gray-600 rounded-lg"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex justify-center">
      <button className="btn btn-sm btn-wide bg-green-300 " type="submit" disabled={!stripe}>
        Pay
      </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
