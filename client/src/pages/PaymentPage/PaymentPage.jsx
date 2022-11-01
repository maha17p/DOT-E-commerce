import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

const PaymentPage = () => {
  const [publishableKey, setPublishableKey] = useState();
  const getStripeAPIKey = async () => {
    try {
      const { data } = await axios.get("/api/v1/payment/stripeapikey");
      setPublishableKey(data.stripeAPIKey);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStripeAPIKey();
  }, []);
  console.log("AAPPIISE", publishableKey);

  return (
    <>
      {publishableKey && (
        <Elements stripe={loadStripe(publishableKey)}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default PaymentPage;
