// RiderCard.js
import React from 'react';
import { FaBox, FaTruck, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

const RiderCard = ({ status, count }) => {
   const statusConfig = {
      pending: {
         icon: <FaBox className="w-6 h-6 text-white" />,
         from: 'from-yellow-500',
         to: 'to-yellow-400',
         shadow: 'shadow-yellow-500/40',
         label: 'Pending Deliveries'
      },
      delivered: {
         icon: <FaCheckCircle className="w-6 h-6 text-white" />,
         from: 'from-green-500',
         to: 'to-green-400',
         shadow: 'shadow-green-500/40',
         label: 'Delivered'
      },
      cancelled: {
         icon: <FaTimesCircle className="w-6 h-6 text-white" />,
         from: 'from-red-500',
         to: 'to-red-400',
         shadow: 'shadow-red-500/40',
         label: 'Cancelled'
      },
      in_progress: {
         icon: <FaTruck className="w-6 h-6 text-white" />,
         from: 'from-blue-500',
         to: 'to-blue-400',
         shadow: 'shadow-blue-500/40',
         label: 'In Progress'
      },
      default: {
         icon: <FaClock className="w-6 h-6 text-white" />,
         from: 'from-gray-500',
         to: 'to-gray-400',
         shadow: 'shadow-gray-500/40',
         label: 'Other'
      }
   };

   const { icon, from, to, shadow, label } = statusConfig[status] || statusConfig.default;

   return (
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
         <div
            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 
            grid h-16 w-16 place-items-center ${from} ${to} text-white ${shadow}`}
         >
            {icon}
         </div>
         <div className="p-4 pt-8 text-right">
            <p className="block text-sm font-medium text-gray-600 capitalize">
               {label}
            </p>
            <h4 className="block text-2xl font-bold leading-snug tracking-normal text-blue-gray-900">
               {count}
            </h4>
         </div>
      </div>
   );
};

export default RiderCard;
