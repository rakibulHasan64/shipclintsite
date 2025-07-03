import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const RiderCard = ({ status, count }) => {
   const statusColorMap = {
      active: {
         from: 'from-green-600',
         to: 'to-green-400',
         shadow: 'shadow-green-500/40',
      },
      deactivated: {
         from: 'from-red-600',
         to: 'to-red-400',
         shadow: 'shadow-red-500/40',
      },
      default: {
         from: 'from-pink-600',
         to: 'to-pink-400',
         shadow: 'shadow-pink-500/40',
      },
   };

   const { from, to, shadow } = statusColorMap[status] || statusColorMap.default;

   return (
      <div className='relative flex flex-col mt-7 justify-center py-5 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
         <div
            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 
          grid h-16 w-16 place-items-center ${from} ${to} text-white ${shadow}`}
         >
            <FaUserAlt className='w-6 h-6 text-white' />
         </div>
         <div className='p-4 text-right'>
            <p className='text-sm font-normal text-blue-gray-600 capitalize'>
               {status} Riders
            </p>
            <h4 className='text-2xl font-semibold text-blue-gray-900'>{count}</h4>
         </div>
      </div>
   );
};

export default RiderCard;
