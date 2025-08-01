import { useQuery } from "@tanstack/react-query";
import { startOfDay, startOfWeek, startOfMonth, startOfYear, isAfter } from "date-fns";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Chart from "react-apexcharts";

const MyEarnings = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const email = user?.email;

   const { data: parcels = [], isLoading } = useQuery({
      queryKey: ["completedDeliveries", email],
      enabled: !!email,
      queryFn: async () => {
         const res = await axiosSecure.get(`/rider/completed-parcels?email=${email}`);
         return res.data;
      },
   });

   const calculateEarning = (parcel) => {
      const cost = Number(parcel.cost);
      return parcel.sender_center === parcel.receiver_center ? cost * 0.8 : cost * 0.3;
   };

   // Filtered earnings
   const now = new Date();
   const todayStart = startOfDay(now);
   const weekStart = startOfWeek(now, { weekStartsOn: 1 });
   const monthStart = startOfMonth(now);
   const yearStart = startOfYear(now);

   let total = 0,
      totalCashedOut = 0,
      totalPending = 0,
      today = 0,
      week = 0,
      month = 0,
      year = 0;

   // Initialize monthly earnings data
   const monthlyEarnings = Array(12).fill(0);
   const monthlyDeliveries = Array(12).fill(0);

   parcels.forEach((p) => {
      const earning = calculateEarning(p);
      const deliveredAt = new Date(p.delivered_at);
      const monthIndex = deliveredAt.getMonth();

      total += earning;
      if (p.cashout_status === "cashed_out") totalCashedOut += earning;
      else totalPending += earning;

      if (isAfter(deliveredAt, todayStart)) today += earning;
      if (isAfter(deliveredAt, weekStart)) week += earning;
      if (isAfter(deliveredAt, monthStart)) month += earning;
      if (isAfter(deliveredAt, yearStart)) year += earning;

      // Add to monthly earnings and deliveries count
      monthlyEarnings[monthIndex] += earning;
      monthlyDeliveries[monthIndex] += 1;
   });

   // Bar Chart options and data
   const barChartOptions = {
      colors: ["#465fff"],
      chart: {
         fontFamily: "Outfit, sans-serif",
         type: "bar",
         height: 350,
         toolbar: {
            show: false,
         },
      },
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: "39%",
            borderRadius: 5,
            borderRadiusApplication: "end",
         },
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         show: true,
         width: 4,
         colors: ["transparent"],
      },
      xaxis: {
         categories: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
         ],
         axisBorder: {
            show: false,
         },
         axisTicks: {
            show: false,
         },
      },
      yaxis: {
         title: {
            text: "Earnings (৳)",
         },
      },
      grid: {
         yaxis: {
            lines: {
               show: true,
            },
         },
      },
      fill: {
         opacity: 1,
      },
      tooltip: {
         y: {
            formatter: (val) => `৳${val.toFixed(2)}`,
         },
      }
   };

   const barChartSeries = [{
      name: "Earnings",
      data: monthlyEarnings,
   }];

   // Line Chart options and data
   const lineChartOptions = {
      legend: {
         show: true,
         position: "top",
         horizontalAlign: "left",
      },
      colors: ["#465FFF", "#9CB9FF"],
      chart: {
         fontFamily: "Outfit, sans-serif",
         height: 350,
         type: "line",
         toolbar: {
            show: false,
         },
      },
      stroke: {
         curve: "smooth",
         width: [2, 2],
      },
      fill: {
         type: "gradient",
         gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
         },
      },
      markers: {
         size: 0,
         strokeColors: "#fff",
         strokeWidth: 2,
         hover: {
            size: 6,
         },
      },
      grid: {
         xaxis: {
            lines: {
               show: false,
            },
         },
         yaxis: {
            lines: {
               show: true,
            },
         },
      },
      dataLabels: {
         enabled: false,
      },
      tooltip: {
         enabled: true,
         x: {
            format: "MMM yyyy",
         },
      },
      xaxis: {
         type: "category",
         categories: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
         ],
         axisBorder: {
            show: false,
         },
         axisTicks: {
            show: false,
         },
         tooltip: {
            enabled: false,
         },
      },
      yaxis: {
         labels: {
            style: {
               fontSize: "12px",
               colors: ["#6B7280"],
            },
         },
         title: {
            text: "Count / Earnings",
         },
      },
   };

   const lineChartSeries = [
      {
         name: "Earnings (৳)",
         data: monthlyEarnings,
      },
      {
         name: "Deliveries",
         data: monthlyDeliveries,
      },
   ];

   return (
      <div className="p-6 space-y-8">
         <h2 className="text-2xl font-bold">My Earnings</h2>
         {isLoading ? (
            <p>Loading...</p>
         ) : (
            <>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-base-200 p-4 rounded-xl shadow">
                     <p className="text-lg font-semibold">Total Earnings</p>
                     <p className="text-2xl font-bold text-green-600">৳{total.toFixed(2)}</p>
                  </div>
                  <div className="bg-base-200 p-4 rounded-xl shadow">
                     <p className="text-lg font-semibold">Cashed Out</p>
                     <p className="text-2xl font-bold text-blue-600">৳{totalCashedOut.toFixed(2)}</p>
                  </div>
                  <div className="bg-base-200 p-4 rounded-xl shadow">
                     <p className="text-lg font-semibold">Pending</p>
                     <p className="text-2xl font-bold text-yellow-600">৳{totalPending.toFixed(2)}</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-base-100 p-4 rounded-lg shadow">
                     <p className="text-sm text-gray-500">Today</p>
                     <p className="text-xl font-bold text-green-700">৳{today.toFixed(2)}</p>
                  </div>
                  <div className="bg-base-100 p-4 rounded-lg shadow">
                     <p className="text-sm text-gray-500">This Week</p>
                     <p className="text-xl font-bold text-green-700">৳{week.toFixed(2)}</p>
                  </div>
                  <div className="bg-base-100 p-4 rounded-lg shadow">
                     <p className="text-sm text-gray-500">This Month</p>
                     <p className="text-xl font-bold text-green-700">৳{month.toFixed(2)}</p>
                  </div>
                  <div className="bg-base-100 p-4 rounded-lg shadow">
                     <p className="text-sm text-gray-500">This Year</p>
                     <p className="text-xl font-bold text-green-700">৳{year.toFixed(2)}</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow">
                     <h3 className="text-lg font-semibold mb-4">Monthly Earnings</h3>
                     <Chart
                        options={barChartOptions}
                        series={barChartSeries}
                        type="bar"
                        height={350}
                     />
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow">
                     <h3 className="text-lg font-semibold mb-4">Earnings & Deliveries Trend</h3>
                     <Chart
                        options={lineChartOptions}
                        series={lineChartSeries}
                        type="line"
                        height={350}
                     />
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default MyEarnings;