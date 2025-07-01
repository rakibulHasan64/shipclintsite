// import axios from 'axios';

// import { useEffect } from 'react';
// import useAuth from './useAuth';

// const axiosSecure = axios.create({
//    baseURL: `http://localhost:3000`,
// });

// const useAxiosSecure = () => {
//    const { user } = useAuth();

//    useEffect(() => {
//       if (user && user.accessToken) {
      
//          axiosSecure.interceptors.request.use(config => {
//             config.headers.Authorization = `Bearer ${user.accessToken}`;
//             return config;
//          });
//       }
//    }, [user]);

//    return axiosSecure;
// };

// export default useAxiosSecure;

import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
   baseURL: `http://localhost:3000`,
});

const useAxiosSecure = () => {
   const { user, logOut } = useAuth();
   const navigate = useNavigate();

   // Request interceptor
   axiosSecure.interceptors.request.use(
      config => {
         if (user?.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
         }
         return config;
      },
      error => Promise.reject(error)
   );

   // Response interceptor
   axiosSecure.interceptors.response.use(
      response => response,
      error => {
         const status = error.response?.status;

         if (status === 403) {
            
            navigate('/forbidden');
         } else if (status === 401) {
            logOut()
               .then(() => {
                  navigate('/login');
               })
               .catch(() => { });
         }

         return Promise.reject(error);
      }
   );

   return axiosSecure;
};

export default useAxiosSecure;
