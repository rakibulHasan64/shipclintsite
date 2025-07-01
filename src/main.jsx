import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './componet/home/HomeLayout.jsx';
import Login from './componet/singin/Login.jsx';
import RootLayout from './componet/singin/RootLayout.jsx';
import Regshter from './componet/singin/Regshter.jsx';
import AuthProvider from './componet/provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './componet/home/ErrorPage.jsx';
import CovarageLayout from './componet/layout/covarage/CovarageLayout.jsx';
import AboutLayout from './componet/about/AboutLayout.jsx';
import Pricing from './componet/Pricing/Pricing.jsx';
import Barider from './componet/baarider/Barider.jsx';
import AddParcel from './componet/layout/addpacel/AddParcel.jsx';
import ResatPassword from './componet/baarider/ResatPassword.jsx';
import EnterCode from './componet/entercoddandrestpass/EnterCode.jsx';
import ResetPass from './componet/entercoddandrestpass/ResetPass.jsx';
import Dabord from './componet/layout/dashbord/Dabord.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pamant from './componet/pamant/Pamant.jsx';
import MyPmantHistory from './componet/layout/dashbord/MyPmantHistory.jsx';
import Pamants from './componet/layout/dashbord/Pamants.jsx';
import PendingRiders from './componet/riders/PandingeRiders.jsx';
import ActiveRider from './componet/riders/ActiveRider.jsx';
import User from './componet/layout/dashbord/User.jsx';
import MakeAdmin from './componet/admin/MakeAdmin.jsx';
import Forbidden from './componet/admin/Forbidden.jsx';
import AdminRout from './componet/admin/AdminRout.jsx';
import PrivateRoute from './componet/privetrout/PrivetRout.jsx';
import AsinRider from './componet/admin/AsinRider.jsx';
import Profile from './componet/layout/dashbord/Profile/Profile.jsx';
import RiderRoute from './route/RiderRoute.jsx';
import PandingDelevery from './componet/layout/dashbord/pandinedeleveiry/PandingDelevery.jsx';
import CompletedDelivery from './componet/layout/dashbord/completDelevery/CompletedDelivery.jsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <HomeLayout />
      },
      {
        path: "/coverage",
        element: <CovarageLayout />,
        loader: ()=> fetch("/warehouses.json")
      },

      {
        path: "/forbidden",
        element: <Forbidden />

      },
      {
        path: "/about",
        element: <AboutLayout />
      },
      {
        path: "/Pricing",
        element: <Pricing />
      },
      
      {
        path: "/addParcel",
        element: <AddParcel />,
        loader: () => fetch("/warehouses.json")
      },
      {
        path: "/payment/:id",
        element: <Pamant />,

      },
      
    ]
  },
  {
    path: '/auth',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Regshter /> },
      { path: 'forget-password', element: <ResatPassword /> },
      { path: 'enter-code', element: <EnterCode /> },
      { path: 'reset-password', element: <ResetPass /> },
    ]
  },

  {
    path: "/dashboard",
    element: <PrivateRoute><Dabord /></PrivateRoute>, 
    children: [
    
      {
        path: "/dashboard/payment",
        index: true,
        element: <Pamants />
      },
    
    
      {
        path: "payment/:id",
        element: <Pamant />  
      },

      {
        path: "/dashboard/profile",
        element:<Profile />

      },
       


      {
        path: "/dashboard/MyPmantHistory", 
        element: <MyPmantHistory />
      },

      {
        path: "/dashboard/assign-rider",
        element: <AdminRout><AsinRider /></AdminRout>

      },
  
      {

        path: "/dashboard/beaRiders",
        element: <Barider />,
        loader: () => fetch("/warehouses.json")
      },
      // riders routes

      {

        path: "/dashboard/completDeleveiy",
        element: <RiderRoute><CompletedDelivery /></RiderRoute>
        
      },

      {
        path: "/dashboard/pending-deliveries",
        element: <RiderRoute> <PandingDelevery /></RiderRoute>,

      },

      // admin routes

      {
        path: "/dashboard/pandinRiders",
        element: <AdminRout><PendingRiders /></AdminRout>
      },
      {
        path: "/dashboard/assign-rider",
        element: <AdminRout><AsinRider /></AdminRout>
      },
    
      {
        path: "/dashboard/ActiveRider",
        element: <AdminRout><ActiveRider /></AdminRout>
      },
      
      {
        path: "/dashboard/makeadmin",
        element: <AdminRout><MakeAdmin /></AdminRout>
      }
    ]
  }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='urbanist-uniquifier'>
          <RouterProvider router={router} />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </QueryClientProvider >
    </AuthProvider>
    
  </StrictMode>,
)
