import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PmantFrom from "./PmantFrom";




const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API);

function Pamant() {

   
   return (
      <>
         
         <Elements stripe={stripePromise}>
            <PmantFrom />
         </Elements>
         
      </>
   );
}

export default Pamant;