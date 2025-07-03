// import React from 'react';
// import DasBordStactik from '../DasBordStactik';

// function RiderDasbord() {
//    return (
//       <div>

//          <DasBordStactik />


//       </div>
//    );
// }

// export default RiderDasbord;

// src/components/RiderDashboard.jsx
// src/pages/Dashboard/RiderDashboard.jsx
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import RiderCard from './RiderCard';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import RiderChart from './RiderChart';

const RiderDashboard = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();

   const { data: statusData = [], isLoading, isError } = useQuery({
      queryKey: ['riderstatus', user?.email],
      queryFn: async () => {
         
         const res = await axiosSecure.get(`/rider/delivery/status-count?email=${user?.email || ''}`);
         return res.data;
      },
      enabled: !!user?.email,
   });

   if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
   if (isError) return <p className="text-center text-red-500">Failed to load data.</p>;

   return (
      <div className="p-3">
         <h2 className="text-3xl font-bold  text-center text-blue-700">Rider Dashboard</h2>

         <div className="grid    grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {statusData.map((item, index) => (
               <RiderCard key={index} status={item.status} count={item.count} />
            ))}
         </div>


         {/* //chart bane do  */}
         <div className="max-w-md mx-auto mt-27">
            <RiderChart data={statusData} />
         </div>

      </div>
   );
};

export default RiderDashboard;
