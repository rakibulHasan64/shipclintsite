import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
   const { user, loading } = useAuth();
   const location = useLocation();

   if (loading) {
      return <div className="text-center py-10">Loading...</div>; 
   }

   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
}

export default PrivateRoute;
