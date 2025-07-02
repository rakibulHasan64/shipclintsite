import React from 'react';
import useAxiosSecure from './useAxiosSecure';

function useTeackingLoogger() {
   const axiosSecure = useAxiosSecure();

   const logTracKingeUpdatred = async ({ tracking_id, status, details, location, updated_by }) => {
      try {
            
           const playod = {
             tracking_id,
             status,
             details,
             location,
             updated_by
           };
         await axiosSecure.post("/trackings",playod)
            
         } catch (error) {
            console.log(error);
            
         }

      
   }
   return {logTracKingeUpdatred}
}

export default useTeackingLoogger;