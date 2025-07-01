import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import Loding from "../privetrout/Loding";

function AdminRoute({ children }) {
   const { user, loading } = useAuth();
   const { role, roleLoading } = useUserRole();
   const location = useLocation();

   if (loading || roleLoading) {
      return <Loding />;
   }

   if (!user || role !== "admin") {
      return <Navigate to="/forbidden" state={{ from: location.pathname }} replace />;
   }

   return children;
}

export default AdminRoute;
