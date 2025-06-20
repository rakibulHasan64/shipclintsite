import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './componet/home/HomeLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomeLayout />
      }
    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist-uniquifier'>
      <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
