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
        path: "/about",
        element: <AboutLayout />
      },
      {
        path: "/Pricing",
        element: <Pricing />
      },
      {
        path: "/baarider",
        element: <Barider />
      },
      {
        path: "/addParcel",
        element: <AddParcel /> 
      }
    ]
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/regishter",
        element: <Regshter />
      },

      {
        path: "/ForgetPass",
        element:<ResatPassword />
      },
      {
        path: "/entercode",
        element: <EnterCode />
      },
      {
        path: "/restPassword",
        element: <ResetPass />
      }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className='urbanist-uniquifier'>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </AuthProvider>
    
  </StrictMode>,
)
