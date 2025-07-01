import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


function User() {
   // const axiosSecure = useAxiosSecure();

   // const { data: users = [], isLoading, error } = useQuery({
   //    queryKey: ["all-users"],
   //    queryFn: async () => {
   //       const res = await axiosSecure.get("/usersAll");
   //       return res.data;
   //    }
   // });

   // if (isLoading) return <p className="text-center">Loading...</p>;
   // if (error) return <p className="text-center text-red-500">Failed to load users</p>;

   return (
      <div className="p-4">
         <h2 className="text-xl font-bold mb-4">All Users </h2>
         {/* <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
               <thead>
                  <tr className="bg-gray-100">
                     <th className="border p-2">#</th>
                     <th className="border p-2">Email</th>
                     <th className="border p-2">Role</th>
                     <th className="border p-2">Created At</th>
                     <th className="border p-2">Last Login</th>
                  </tr>
               </thead>
               <tbody>
                  {users?.map((user, idx) => (
                     <tr key={user._id}>
                        <td className="border p-2 text-center">{idx + 1}</td>
                        <td className="border p-2">{user.email}</td>
                        <td className="border p-2 capitalize">{user.role}</td>
                        <td className="border p-2">{new Date(user.created_at).toLocaleString()}</td>
                        <td className="border p-2">{new Date(user.last_log_in).toLocaleString()}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div> */}
      </div>
   );
}

export default User;
