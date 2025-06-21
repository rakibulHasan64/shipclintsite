import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

function Regshter() {
   const { signUp, googleLogin } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      try {
         const { email, password } = data;
         const result = await signUp(email, password);
         console.log("User registered:", result.user);
         // Navigate or show success message
      } catch (error) {
         console.error("Registration error:", error.message);
         // Show error to user
      }
   };

   const handleGogle = async () => {
      try {
         const result = await googleLogin();
         toast.success("Logged in successfully!");
         
      } catch (error) {
         console.error("Google login failed:", error.message);
         
      }
   };
   

   return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen bg-white">
         <div className="w-full max-w-md rounded-2xl p-8 ">

            <h1 className="text-[28px] font-bold text-center mb-1">Create an Account</h1>
            <h3 className="text-center text-gray-500 mb-6">Register with Profast</h3>

            <div className="flex justify-center mb-4">
               <img src="/register-illustration.svg" alt="Register" className="w-32 h-32" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               {/* Name */}
               <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                  <input
                     type="text"
                     {...register("name", { required: "Name is required" })}
                     placeholder="Your name"
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  />
                  {errors.name && (
                     <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
               </div>

               {/* Email */}
               <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input
                     type="email"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Enter a valid email address"
                        }
                     })}
                     placeholder="Your email"
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  />
                  {errors.email && (
                     <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
               </div>

               {/* Password */}
               <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                  <input
                     type="password"
                     {...register("password", {
                        required: "Password is required",
                        minLength: {
                           value: 6,
                           message: "Password must be at least 6 characters"
                        }
                     })}
                     placeholder="Create a password"
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  />
                  {errors.password && (
                     <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
               </div>

               {/* Submit Button */}
               <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
               >
                  Register
               </button>

               <p className="text-sm text-center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:underline">
                     Login
                  </Link>
               </p>

               <div className="flex items-center justify-center gap-2 text-gray-400">
                  <hr className="w-full border-gray-300" />
                  <span>or</span>
                  <hr className="w-full border-gray-300" />
               </div>

               <button 
                  onClick={handleGogle}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
               >
                  <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                  <span>Register with Google</span>
               </button>
            </form>
         </div>
      </div>
   );
}

export default Regshter;
