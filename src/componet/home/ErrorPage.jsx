import { Link } from "react-router-dom";

function ErrorPage() {
   return (
      <div className="h-screen flex justify-center items-center bg-white px-4">
         <div className="flex flex-col items-center gap-4 text-center">
            <img
               src="/18499954_bubble_gum200_89 1.png"
               alt="Error Illustration"
               className="w-72 max-w-full"
            />

            <h2 className="text-2xl font-bold text-gray-700">Oops! Page not found.</h2>
            <p className="text-gray-500">The page you're looking for doesn’t exist.</p>

            <Link
               to="/"
               className="inline-block py-2 px-5 bg-[#CAEB66] text-black rounded-lg shadow hover:bg-lime-400 transition"
            >
               Go Home
            </Link>
         </div>
      </div>
   );
}

export default ErrorPage;
