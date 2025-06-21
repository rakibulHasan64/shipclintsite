import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router-dom';

function CovarageLayout() {
   const serviesCenter = useLoaderData();

   const [searchText, setSearchText] = useState('');
   const [filteredCenters, setFilteredCenters] = useState(serviesCenter);

   const handleSearch = () => {
      const filtered = serviesCenter.filter(center =>
         center.district.toLowerCase().includes(searchText.toLowerCase()) ||
         center.city.toLowerCase().includes(searchText.toLowerCase()) ||
         center.covered_area.some(area =>
            area.toLowerCase().includes(searchText.toLowerCase())
         )
      );
      setFilteredCenters(filtered);
   };

   return (
      <div className="container mx-auto mb-6 mt-10 bg-white shadow-md p-10 rounded-xl">
         <div className="mb-10">
            <h3 className="text-[40px] md:text-[56px] font-bold text-gray-800">
               We are available in 64 districts
            </h3>
         </div>

         {/* Search Box */}
         <div className="flex items-center gap-2 mb-10">
            <div className="relative w-full max-w-md">
               <input
                  type="text"
                  placeholder="Search here"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full border border-gray-300 rounded-full px-5 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <button
               onClick={handleSearch}
               className="bg-[#CAEB66] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#bada56] transition"
            >
               Search
            </button>
         </div>

         <p className='text-[30px] font-bold mt-5'>
            We deliver almost all over Bangladesh
         </p>

         {/* Bangladesh Map */}
         <BangladeshMap serviesCenter={filteredCenters} />
      </div>
   );
}

export default CovarageLayout;
