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
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <HomeLayout />
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
