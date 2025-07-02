import Forbidden from "../../admin/Forbidden";
import useUserRole from "../../hooks/useUserRole";
import Loding from "../../privetrout/Loding";
import AdminDasbord from "./allDasbord/AdminDasbord";
import RiderDasbord from "./allDasbord/RiderDasbord";

import UserDasbord from "./allDasbord/UserDasbord";


function DasbordHoms() {
   const { role, roleLoading } = useUserRole();
   
   if (roleLoading) {
      return <Loding />
      
   }



   if (role === "user") {
      return < UserDasbord />;
   } else if (role === "admin") {
      return <AdminDasbord />;
   } else if (role === "rider"){
      return <RiderDasbord />
   } else {
      return <Forbidden />
   }
    
   
}

export default DasbordHoms;