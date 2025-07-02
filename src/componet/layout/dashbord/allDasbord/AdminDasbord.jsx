import React, { useEffect, useState } from "react";
import { BsFillCartPlusFill, BsFillHouseDoorFill } from "react-icons/bs";
import { FaDollarSign, FaUserAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminCaed from "./AdminCaed";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   LabelList,
} from "recharts";

const COLORS = {
   delivered: "#3b82f6",
   not_collected: "#10b981",
   rider_assigned: "#f59e0b",
};

function AdminDasbord() {
   const axiosSecure = useAxiosSecure();
   const [statusData, setStatusData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await axiosSecure.get("/parcels/delivery/status-count");
            setStatusData(res.data);
         } catch (error) {
            console.error("Error fetching status data:", error);
         }
      };
      fetchData();
   }, [axiosSecure]);

   const getCount = (statusName) => {
      const found = statusData.find((item) => item._id === statusName);
      return found ? found.count : 0;
   };

   // Transform data for AreaChart
   const chartData = [
      {
         name: "Delivered",
         count: getCount("delivered"),
         color: COLORS.delivered,
      },
      {
         name: "Not Collected",
         count: getCount("not_collected"),
         color: COLORS.not_collected,
      },
      {
         name: "Rider Assigned",
         count: getCount("rider_assigned"),
         color: COLORS.rider_assigned,
      },
   ];

   return (
      <div className="">
         {/* Stat Cards */}
         <div className="p-6">
            <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               <AdminCaed
                  icon={<FaDollarSign className="w-6 h-6 text-white" />}
                  title="Delivered"
                  count={getCount("delivered")}
                  color="from-green-600 to-green-400"
               />
               <AdminCaed
                  icon={<BsFillCartPlusFill className="w-6 h-6 text-white" />}
                  title="Not Collected"
                  count={getCount("not_collected")}
                  color="from-red-600 to-red-400"
               />
               <AdminCaed
                  icon={<BsFillHouseDoorFill className="w-6 h-6 text-white" />}
                  title="Rider Assigned"
                  count={getCount("rider_assigned")}
                  color="from-blue-600 to-blue-400"
               />
               <AdminCaed
                  icon={<FaUserAlt className="w-6 h-6 text-white" />}
                  title="Total Users"
                  count={4}
                  color="from-yellow-600 to-yellow-400"
               />
            </div>
         </div>

         {/* Area Chart */}
         <div className="p-6 mt-10">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-6xl mx-auto">
               <h2 className="text-xl font-bold text-gray-800 mb-6 text-center border-b pb-2">
                  Delivery Status Overview
               </h2>
               <ResponsiveContainer width="100%" height={360}>
                  <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                     <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
                     <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 12 }} />
                     <YAxis allowDecimals={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                     <Tooltip
                        contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
                        itemStyle={{ color: "#374151" }}
                     />
                     <Area
                        type="monotone"
                        dataKey="count"
                        stroke="#6366f1"
                        fill="#c7d2fe"
                        strokeWidth={3}
                     >
                        <LabelList dataKey="count" position="top" style={{ fontWeight: "bold" }} />
                     </Area>
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
   );
}

export default AdminDasbord;




// export default AdminDasbord;