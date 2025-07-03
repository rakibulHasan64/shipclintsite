import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DasBordStactik from "../DasBordStactik";
import { FaHeart } from "react-icons/fa";

function UserDasbord() {
   const axiosSecure = useAxiosSecure();
   const [users, setUsers] = useState([]);
   const [likeCounts, setLikeCounts] = useState({}); // { email: count }

   // Load all users with role = user
   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const res = await axiosSecure.get("/users/by-role?role=user");
            setUsers(res.data);
         } catch (error) {
            console.error("Failed to fetch user data", error);
         }
      };
      fetchUsers();
   }, [axiosSecure]);

   // Load like counts
   useEffect(() => {
      const fetchLikes = async () => {
         try {
            const updatedCounts = {};
            for (const user of users) {
               const res = await axiosSecure.get(`/likes?email=${user.email}`);
               updatedCounts[user.email] = res.data.count;
            }
            setLikeCounts(updatedCounts);
         } catch (err) {
            console.error("Failed to fetch likes", err);
         }
      };
      if (users.length > 0) fetchLikes();
   }, [users, axiosSecure]);

   // Handle Like button click
   const handleLike = async (email) => {
      try {
         await axiosSecure.post("/likes", { email });
         const res = await axiosSecure.get(`/likes?email=${email}`);
         setLikeCounts((prev) => ({ ...prev, [email]: res.data.count }));
      } catch (err) {
         console.error("Like failed", err);
      }
   };
   

   return (
      <div className="p-6">
         <DasBordStactik users={users} likeCounts />

         <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-gray-300">
               <thead className="bg-gray-100">
                  <tr>
                     <th className="px-4 py-2">#</th>
                     <th className="px-4 py-2 text-left">Email</th>
                     <th className="px-4 py-2 text-left">Created At</th>
                     <th className="px-4 py-2 text-left">Last Login</th>
                     <th className="px-4 py-2 text-center">Like</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => (
                     <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-center">{index + 1}</td>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">
                           {new Date(user.created_at).toLocaleString()}
                        </td>
                        <td className="px-4 py-2">
                           {new Date(user.last_log_in).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 text-center">
                           <button
                              onClick={() => handleLike(user.email)}
                              className="flex items-center gap-1 text-red-600 font-semibold"
                           >
                              <FaHeart className="text-lg" />
                              {likeCounts[user.email] || 0}
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default UserDasbord;
