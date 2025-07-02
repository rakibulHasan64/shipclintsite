import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import useUserRole from "../../../hooks/useUserRole";

function Profile() {
   const { user } = useAuth();
   const { role} = useUserRole();

   return (
      <div className="p-6 max-w-xl mx-auto">
         <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

         <div className="bg-white shadow-md rounded-lg p-6 text-center">
            {/* User photo */}
            {user?.photoURL ? (
               <img
                  src={user.photoURL}
                  alt="User"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border"
               />
            ) : (
               <FaUserCircle className="text-gray-400 text-[96px] mx-auto mb-4" />
            )}

            <h3 className="text-2xl font-semibold mb-1">{role || "Anonymous User"}</h3>

            {/* User name */}
            <h3 className="text-2xl font-semibold mb-1">{user?.displayName || "Anonymous User"}</h3>

            {/* User email */}
            <p className="text-gray-600 mb-3">{user?.email}</p>

            {/* Role or placeholder */}
            <p className="text-sm text-gray-500 italic">Logged in via Firebase</p>
         </div>
      </div>
   );
}

export default Profile;
