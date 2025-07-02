import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function TakingeParcel() {
   const axiosSecure = useAxiosSecure();
   const [trackingId, setTrackingId] = useState("");
   const [status, setStatus] = useState("");
   const [details, setDetails] = useState("");
   const [updatedBy, setUpdatedBy] = useState("");

   // ✅ POST Mutation
   const { mutateAsync: postTrackingUpdate } = useMutation({
      mutationFn: async (update) => {
         const res = await axiosSecure.post("/trackings", update);
         return res.data;
      },
      onSuccess: () => {
         Swal.fire("Success", "Tracking update added", "success");
         refetch(); // reload tracking history
      },
      onError: () => {
         Swal.fire("Error", "Failed to add tracking update", "error");
      },
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!trackingId || !status) {
         return Swal.fire("Warning", "tracking_id and status required", "warning");
      }

      await postTrackingUpdate({
         tracking_id: trackingId,
         status,
         details,
         updated_by: updatedBy,
      });

      setStatus("");
      setDetails("");
   };

   // ✅ Load updates for the tracking ID
   const { data: updates = [], refetch, isLoading } = useQuery({
      queryKey: ["trackings", trackingId],
      enabled: !!trackingId,
      queryFn: async () => {
         const res = await axiosSecure.get(`/trackings/${trackingId}`);
         return res.data;
      },
   });

   return (
      <div className="p-6 space-y-6">
         <h2 className="text-2xl font-bold">Track & Update Parcel</h2>

         {/* Tracking Update Form */}
         <form onSubmit={handleSubmit} className="space-y-3">
            <input
               type="text"
               placeholder="Tracking ID"
               value={trackingId}
               onChange={(e) => setTrackingId(e.target.value)}
               className="input input-bordered w-full"
               required
            />
            <input
               type="text"
               placeholder="Status (e.g., parcel_created, in_transit)"
               value={status}
               onChange={(e) => setStatus(e.target.value)}
               className="input input-bordered w-full"
               required
            />
            <input
               type="text"
               placeholder="Details (optional)"
               value={details}
               onChange={(e) => setDetails(e.target.value)}
               className="input input-bordered w-full"
            />
            <input
               type="email"
               placeholder="Updated By (email)"
               value={updatedBy}
               onChange={(e) => setUpdatedBy(e.target.value)}
               className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">
               Add Tracking Update
            </button>
         </form>

         {/* Tracking History */}
         {trackingId && (
            <div>
               <h3 className="text-lg font-semibold mt-6 mb-2">Tracking History</h3>
               {isLoading ? (
                  <p>Loading...</p>
               ) : updates.length === 0 ? (
                  <p>No tracking updates found.</p>
               ) : (
                  <ul className="space-y-2">
                     {updates.map((update) => (
                        <li key={update._id} className="border p-2 rounded">
                           <p><strong>Status:</strong> {update.status}</p>
                           <p><strong>Details:</strong> {update.details}</p>
                           <p><strong>Updated By:</strong> {update.updated_by}</p>
                           <p><strong>Time:</strong> {new Date(update.timestamp).toLocaleString()}</p>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         )}
      </div>
   );
}

export default TakingeParcel;
