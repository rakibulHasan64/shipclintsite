import useAuth from "../../../hooks/useAuth";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import useUserRole from "../../../hooks/useUserRole";

function Profile() {
   const { user } = useAuth();
   const { role } = useUserRole();

   // Sample user data (replace with your actual data)
   const userDetails = {
      phone: "+880 1234 567890",
      address: "123 Main Street, Dhaka, Bangladesh",
      joinDate: "January 15, 2023",
      employeeId: "EMP-2023-015",
      department: "Delivery Operations",
   };

   return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
               <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  My Profile
               </h1>
               <p className="mt-3 text-xl text-gray-500">
                  View and manage your account information
               </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
               {/* Profile Header */}
               <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
                  {user?.photoURL ? (
                     <img
                        src={user.photoURL}
                        alt="User"
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                     />
                  ) : (
                     <FaUserCircle className="text-white text-[120px] mx-auto mb-4" />
                  )}

                  <div className="mb-2">
                     <h2 className="text-2xl font-bold text-white">
                        {user?.displayName || "Anonymous User"}
                     </h2>
                     <div className="inline-flex items-center px-3 py-1 mt-2 bg-white bg-opacity-20 rounded-full text-sm font-medium text-black">
                        <MdWork className="mr-2" />
                        {role || "User"}
                     </div>
                  </div>
               </div>

               {/* Profile Details */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                     <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
                        Personal Information
                     </h3>

                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                           <FaEnvelope className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                           <p className="text-sm font-medium text-gray-500">Email</p>
                           <p className="text-sm font-semibold text-gray-700">
                              {user?.email || "Not provided"}
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                           <FaPhone className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                           <p className="text-sm font-medium text-gray-500">Phone</p>
                           <p className="text-sm font-semibold text-gray-700">
                              {userDetails.phone}
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                           <FaMapMarkerAlt className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                           <p className="text-sm font-medium text-gray-500">Address</p>
                           <p className="text-sm font-semibold text-gray-700">
                              {userDetails.address}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                     <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
                        Professional Information
                     </h3>

                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                           <FaIdCard className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                           <p className="text-sm font-medium text-gray-500">Employee ID</p>
                           <p className="text-sm font-semibold text-gray-700">
                              {userDetails.employeeId}
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                           <MdWork className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                           <p className="text-sm font-medium text-gray-500">Department</p>
                           <p className="text-sm font-semibold text-gray-700">
                              {userDetails.department}
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                           <FaCalendarAlt className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                           <p className="text-sm font-medium text-gray-500">Join Date</p>
                           <p className="text-sm font-semibold text-gray-700">
                              {userDetails.joinDate}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-between border-t">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Edit Profile
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Change Password
                  </button>
               </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-8 bg-white shadow-xl rounded-lg overflow-hidden">
               <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                     Account Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <p className="text-sm font-medium text-gray-500">Account Status</p>
                        <p className="text-sm font-semibold text-green-600">Active</p>
                     </div>
                     <div>
                        <p className="text-sm font-medium text-gray-500">Last Login</p>
                        <p className="text-sm font-semibold text-gray-700">
                           {new Date().toLocaleString()}
                        </p>
                     </div>
                     <div>
                        <p className="text-sm font-medium text-gray-500">Authentication Method</p>
                        <p className="text-sm font-semibold text-gray-700">
                           {user?.providerData?.[0]?.providerId || "Email/Password"}
                        </p>
                     </div>
                     <div>
                        <p className="text-sm font-medium text-gray-500">Account Created</p>
                        <p className="text-sm font-semibold text-gray-700">
                           {user?.metadata?.creationTime || "Unknown"}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;