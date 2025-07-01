import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


function MyPaymentHistory() {
   const { user } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { isLoading, data: payments = [], error } = useQuery({
      queryKey: ["payments", user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get(`/payments?email=${user?.email}`);
         return res?.data;
      },
      enabled: !!user?.email,
   });

   if (isLoading) return <p className="text-center py-10">Loading payment history...</p>;
   if (error) return <p className="text-center text-red-500 py-10">Error loading payment history.</p>;

   return (
      <div className="p-6 bg-white rounded-xl shadow-md overflow-x-auto">
         <h2 className="text-2xl font-bold mb-6 text-gray-800">💳 My Payment History</h2>

         {payments.length === 0 ? (
            <p className="text-gray-600">No payment history found.</p>
         ) : (
            <table className="min-w-full table-auto border border-gray-200 text-sm">
               <thead className="bg-lime-100 text-gray-700">
                  <tr>
                     <th className="px-4 py-3 border">#</th>
                     <th className="px-4 py-3 border">Transaction ID</th>
                     <th className="px-4 py-3 border">Parcel ID</th>
                     <th className="px-4 py-3 border">Amount</th>
                     <th className="px-4 py-3 border">Method</th>
                     <th className="px-4 py-3 border">Paid At</th>
                  </tr>
               </thead>
               <tbody>
                  {payments.map((payment, index) => (
                     <tr
                        key={payment._id}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                     >
                        <td className="px-4 py-2 border text-center">{index + 1}</td>
                        <td className="px-4 py-2 border">{payment.transactionId}</td>
                        <td className="px-4 py-2 border">{payment.parcelId}</td>
                        <td className="px-4 py-2 border text-center text-green-600 font-semibold">
                           ${payment.amount}
                        </td>
                        <td className="px-4 py-2 border text-center">
                           {payment.paymentMethod?.join(", ") || "N/A"}
                        </td>
                        <td className="px-4 py-2 border text-center text-sm text-gray-600">
                           {new Date(payment.paid_at).toLocaleString()}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
}

export default MyPaymentHistory;
