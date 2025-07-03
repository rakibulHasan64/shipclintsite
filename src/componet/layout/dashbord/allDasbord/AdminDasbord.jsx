import React, { useEffect, useState } from "react";
import {
   BsFillCartPlusFill,
   BsFillHouseDoorFill,
   BsTruck,
   BsCheckCircle,
} from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

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

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminCaed from "./AdminCaed";

const STATUS_CONFIG = {
   delivered: {
      color: "#3b82f6",
      title: "Delivered",
      icon: <BsFillHouseDoorFill className="w-6 h-6 text-white" />,
      gradient: "from-blue-600 to-blue-400",
   },
   not_collected: {
      color: "#10b981",
      title: "Not Collected",
      icon: <BsFillCartPlusFill className="w-6 h-6 text-white" />,
      gradient: "from-green-600 to-green-400",
   },
   rider_assigned: {
      color: "#f59e0b",
      title: "Rider Assigned",
      icon: <BsTruck className="w-6 h-6 text-white" />,
      gradient: "from-yellow-600 to-yellow-400",
   },
   payment_done: {
      color: "#34d399",
      title: "Payment Done",
      icon: <FaDollarSign className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-green-300",
   },
   parcel_created: {
      color: "#fbbf24",
      title: "Parcel Created",
      icon: <BsCheckCircle className="w-6 h-6 text-white" />,
      gradient: "from-yellow-500 to-yellow-300",
   },
   in_transit: {
      color: "#60a5fa",
      title: "In Transit",
      icon: <BsTruck className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-blue-300",
   },
};

function AdminDashboard() {
   const axiosSecure = useAxiosSecure();

   const [parcelStatusData, setParcelStatusData] = useState([]);
   const [takingeStatusData, setTakingeStatusData] = useState([]);

   const [combinedChartData, setCombinedChartData] = useState([]);

   useEffect(() => {
      const fetchParcelStatus = async () => {
         try {
            const res = await axiosSecure.get("/parcels/delivery/status-count");
            setParcelStatusData(res.data);
         } catch (error) {
            console.error("Error fetching parcel status data:", error);
         }
      };

      const fetchTakingeStatus = async () => {
         try {
            const res = await axiosSecure.get("/takinge/status");
            setTakingeStatusData(res.data);
         } catch (error) {
            console.error("Error fetching takinge status data:", error);
         }
      };

      fetchParcelStatus();
      fetchTakingeStatus();
   }, [axiosSecure]);

   const getCount = (status, dataArray) => {
      const item = dataArray.find((d) => d.status === status);
      return item ? item.count : 0;
   };

   // parcel আর takinge data মিলিয়ে combined ডেটা তৈরি
   useEffect(() => {
      const combinedData = Object.keys(STATUS_CONFIG).map((key) => ({
         name: STATUS_CONFIG[key].title,
         count:
            getCount(key, parcelStatusData) + getCount(key, takingeStatusData),
         color: STATUS_CONFIG[key].color,
      }));

      setCombinedChartData(combinedData);
   }, [parcelStatusData, takingeStatusData]);

   return (
      <div className="p-6 space-y-16">
         <section>
            <h2 className="text-2xl font-bold mb-6">Combined Parcel & Takinge Status</h2>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-10">
               {Object.keys(STATUS_CONFIG).map((key) => (
                  <AdminCaed
                     key={key}
                     icon={STATUS_CONFIG[key].icon}
                     title={STATUS_CONFIG[key].title}
                     count={
                        getCount(key, parcelStatusData) + getCount(key, takingeStatusData)
                     }
                     color={STATUS_CONFIG[key].gradient}
                  />
               ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
               <h3 className="text-xl font-semibold mb-4 text-center border-b pb-2">
                  Combined Parcel Status Overview
               </h3>
               <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                     data={combinedChartData}
                     margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
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
         </section>
      </div>
   );
}

export default AdminDashboard;
