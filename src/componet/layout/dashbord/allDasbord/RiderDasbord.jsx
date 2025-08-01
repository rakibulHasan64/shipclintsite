import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import RiderCard from './RiderCard';
import RiderChart from './RiderChart';

const RiderDashboard = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();

   const {
      data: statusData = [],
      isLoading,
      isError,
   } = useQuery({
      queryKey: ['riderstatus', user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get(
            `/rider/delivery/status-count?email=${user?.email || ''}`
         );
         return res.data;
      },
      enabled: !!user?.email,
   });

   if (isLoading)
      return (
         <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
         </div>
      );

   if (isError)
      return (
         <p className="text-center text-red-500 py-10">
            Failed to load data. Please try again later.
         </p>
      );

   return (
      <div className="p-4 md:p-6 lg:p-8">
         <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-6 md:mb-8">
            Rider Dashboard
         </h2>

         {/* Status Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {statusData.map((item, index) => (
               <RiderCard key={index} status={item.status} count={item.count} />
            ))}
         </div>

         {/* Chart Section */}
         <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
               Delivery Status Overview
            </h3>
            <div className="h-64 md:h-80">
               <RiderChart data={statusData} />
            </div>
         </div>
      </div>
   );
};

export default RiderDashboard;
