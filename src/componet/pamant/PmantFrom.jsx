import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useTeackingLoogger from "../hooks/useTeackingLoogger";

function PmantFrom() {
   const { user } = useAuth();
   const [errors, setErrors] = useState('');
   const stripe = useStripe();
   const elements = useElements();
   const { id: parcelid } = useParams();
   const navigate = useNavigate();
   const {logTracKingeUpdatred} = useTeackingLoogger();
   const axiosSecure = useAxiosSecure();


   const {isPending, data: parcelInfo={} } = useQuery({
      
      queryKey: ["parcel", parcelid],
      queryFn: async() => {
         const res = await axiosSecure.get(`/parcels/${parcelid}`)
         return res.data
      }
   })

   if (isPending) {
      return <div className="">Loddinge ...</div>

   }



   const amount = parcelInfo?.cost;
   const amountsIntcents = amount * 100;
   
   
   
   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) {
         
         return;
      }

   
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         setErrors(error.message);
      } else {
         setErrors("");
         console.log('[PaymentMethod]', paymentMethod);
      }
      

      const res = await axiosSecure.post('/create-payment-intent', {
         amountsIntcents,
         parcelid

      })
      console.log("res from intet" ,res);

      const clientSecret = res.data.clientSecret; 
      
      

      const result = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
               name: user.displayName,
               email: user.email
            },
         },
      });

      
      
      if (result.error) {
         setErrors(result.error.message);
      } else {
         setErrors('');
         if (result.paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded!');
            const transactionId = result.paymentIntent.id;
      
            const paymentData = {
               parcelId: parcelid,
               email: user.email,
               amount,
               transactionId: transactionId,
               paymentMethod: result.paymentIntent.payment_method_types
            }

            const paymentRes = await axiosSecure.post('/payments', paymentData);
            if (paymentRes.data.insertedId) {

               
               await Swal.fire({
                  icon: 'success',
                  title: 'Payment Successful!',
                  html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                  confirmButtonText: 'Go to My Parcels',
               });
               await logTracKingeUpdatred({
                  tracking_id: parcelInfo.tracking_id,
                  status: "payment_done",
                  details: `Paid by ${user?.displayName}`,
                  updated_by: user?.email,
               })

               navigate('/dashboard/MyPmantHistory');

            }
         }
      }


      // if (result.error) {
      //    setErrors(result.error.message);
      
      // } else {
      //    setErrors("")
      //    if (result.paymentIntent.status === 'succeeded') {
            
      //       console.log('✅ Payment successful!', result.paymentIntent);
      //       // Success message or redirect
      //    }

      // }
         
   
      

      
      
      
   }
   return (
      <>
         <div className=" w-1/3 mx-auto p-6">
            <form onSubmit={handleSubmit}>
               <CardElement />
               <button type="submit" disabled={!stripe} className="btn btn-primary mt-4">Pay ${amount}</button>
               {errors && <p className="text-red-500">{errors}</p>}

            </form>
      </div>
      </>
   );
}

export default PmantFrom;