import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function EnterCode() {
   const inputsRef = useRef([]);
   const [code, setCode] = useState(new Array(6).fill(""));

   const handleChange = (element, index) => {
      const value = element.value.replace(/[^0-9]/g, "");
      if (value) {
         const newCode = [...code];
         newCode[index] = value;
         setCode(newCode);
         if (index < 5) {
            inputsRef.current[index + 1].focus();
         }
      }
   };

   const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
         inputsRef.current[index - 1].focus();
      }
   };

   const handleVerify = () => {
      const finalCode = code.join("");
      console.log("Entered Code:", finalCode);
      // এখানে API call বা অন্য logic দেওয়া যাবে
   };

   return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen bg-white relative">
         <div className="w-full max-w-md rounded-2xl p-8 shadow-lg">
            <Link to={"/"}><div className="flex items-center absolute top-6 left-8">
               <img className="h-9" src="/logo.png" alt="dummyLogoColored" />
               <span className="text-[32px] font-extrabold ml-2">Profast</span>
            </div></Link>

            <div className="mt-16 text-center">
               <h3 className="text-[36px] font-bold mb-2">Enter Code</h3>
               <p className="text-gray-600 mb-8">
                  Enter the 6-digit code that we sent to your email address.
               </p>

               <div className="flex justify-center gap-3 mb-6">
                  {code.map((digit, index) => (
                     <input
                        key={index}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-12 h-12 text-center text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                     />
                  ))}
               </div>

               <button
                  onClick={handleVerify}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md"
               >
                  Verify Code
               </button>
            </div>
         </div>
      </div>
   );
}

export default EnterCode;
