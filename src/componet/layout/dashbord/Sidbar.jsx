import { Link, NavLink } from "react-router-dom";


// React Icons
import { FaMoneyBillAlt, FaHistory, FaMotorcycle, FaUserCheck, FaUserClock, FaUserShield, FaUserPlus, FaUser, FaTasks, FaWallet } from "react-icons/fa";
import useUserRole from "../../hooks/useUserRole";

function Sidebar() {
   const { role, roleLoading } = useUserRole();

   if (roleLoading) {
      return (
         <div className="flex justify-center items-center h-screen">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-red-500"></div>
         </div>
      );
   }


   return (
      <div className="p-4">
         <Link to={"/"}>
            <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
         </Link>
         <ul className="space-y-5 text-xl">
            <li>
               <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                     isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                  }
               >
                  <FaMoneyBillAlt />Home
               </NavLink>
            </li>


            {!roleLoading && role === "user" && (
               <>
                  <li>
                     <NavLink
                        to="/dashboard/payment"
                        className={({ isActive }) =>
                           isActive
                              ? "text-red-500 hover:underline flex items-center gap-2"
                              : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaMoneyBillAlt /> Payment
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/dashboard/myPaymentHistory"
                        className={({ isActive }) =>
                           isActive
                              ? "text-red-500 hover:underline flex items-center gap-2"
                              : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaHistory /> My Payment History
                     </NavLink>
                  </li>
               </>
            )}


            <li>
               <NavLink
                  to="/dashboard/beaRiders"
                  className={({ isActive }) =>
                     isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                  }
               >
                  <FaUserPlus /> Be a Rider
               </NavLink>
            </li>

            <li>
               <NavLink
                  to="/dashboard/Taking"
                  className={({ isActive }) =>
                     isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                  }
               >
                  <FaUser /> Taking
               </NavLink>
            </li>


            <li>
               <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                     isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                  }
               >
                  <FaUser /> Profile 
               </NavLink>
            </li>

            {!roleLoading && role === "rider" && (

              
               <>
                  
                  <li>
                     <NavLink
                        to="/dashboard/pending-deliveries"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaTasks /> Pending Deliveties
                     </NavLink>
                  </li>


                  <li>
                     <NavLink
                        to="/dashboard/erning"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaWallet /> My Earnings              </NavLink>
                  </li>



                  <li>
                     <NavLink
                        to="/dashboard/completDeleveiy"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaTasks /> CompletDeleveiry
                     </NavLink>
                  </li>
               </>
            


               
            
            
            
            )}

            {!roleLoading && role === "admin" && (
               <>
                  <li>
                     <NavLink
                        to="/dashboard/pandinRiders"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaUserClock /> Pending Riders
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/dashboard/ActiveRider"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaUserCheck /> Active Riders
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/dashboard/assign-rider"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaMotorcycle /> Assign Rider
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/dashboard/makeadmin"
                        className={({ isActive }) =>
                           isActive ? "text-red-500 hover:underline flex items-center gap-2" : "hover:underline flex items-center gap-2"
                        }
                     >
                        <FaUserShield /> Make Admin
                     </NavLink>
                  </li>
               </>
            )}
         </ul>
      </div>
   );
}

export default Sidebar;
