import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loding from './Loding';

function PrivateRoute({ children }) {
   const { user, loading } = useAuth();
   const location = useLocation();

   if (loading) {
      return <Loding />; 
   }

   if (!user) {
      return <Navigate to="/auth/login" state={{ from: location }} replace />;
   }

   return children;
}

export default PrivateRoute;
