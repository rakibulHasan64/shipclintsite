

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../componet/hooks/useAuth";
import useUserRole from "../componet/hooks/useUserRole";
import Loding from "../componet/privetrout/Loding";

function RiderRoute({ children }) {
   const { user, loading } = useAuth();
   const { role, roleLoading } = useUserRole();
   const location = useLocation();

   console.log(role);
   

   if (loading || roleLoading) {
      return <Loding />;
   }

   if (!user || role !== "rider") {
      return <Navigate to="/forbidden" state={{ from: location.pathname }} replace />;
   }

   return children;
}

export default RiderRoute;
