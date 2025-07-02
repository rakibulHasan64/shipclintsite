

function AdminCaed({ icon, title, count, color }) {
   return (
      <div>

         <div className='relative flex flex-col justify-center py-5 bg-white text-gray-700 shadow-md rounded-xl'>
            <div
               className={`absolute -mt-4 mx-4 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-tr ${color} text-white shadow-lg`}
            >
               {icon}
            </div>
            <div className='p-4 text-right'>
               <p className='text-sm font-normal text-blue-gray-600'>{title}</p>
               <h4 className='text-2xl font-semibold text-blue-gray-900'>{count}</h4>
            </div>
         </div>
         
      </div>
   );
}

export default AdminCaed;