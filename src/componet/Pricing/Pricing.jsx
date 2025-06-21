import { useState } from "react";

function Pricing() {
   const [parcelType, setParcelType] = useState("");
   const [weight, setWeight] = useState("");
   const [cost, setCost] = useState(null);

   const handleCalculate = (e) => {
      e.preventDefault();
      let baseRate = parcelType === "Document" ? 30 : 50;
      let extra = parseFloat(weight) * 10;
      setCost(baseRate + extra);
   };

   const handleReset = () => {
      setParcelType("");
      setWeight("");
      setCost(null);
   };

   return (
      <div className="container mx-auto mt-10 px-9 mb-6 py-7 bg-white shadow rounded-2xl">
         <h3 className="text-[40px] md:text-[56px] font-bold mb-7">Pricing Calculator</h3>
         <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and zero
            hassle. From personal packages to business shipments — we deliver on
            time, every time.
         </p>

         <hr className="border-[1px] mt-8 border-gray-400" />

         <div className="mt-8">
            <h4 className="text-2xl font-extrabold text-center">Calculate Your Cost</h4>

            <form onSubmit={handleCalculate} className="mt-9 w-1/2 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
               {/* Form Inputs */}
               <div className="space-y-6 w-full md:w-1/3 mx-auto">
                  <div>
                     <label className="text-lg font-medium block mb-1">Parcel Type</label>
                     <select
                        value={parcelType}
                        onChange={(e) => setParcelType(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                     >
                        <option value="">Select Parcel type</option>
                        <option value="Document">Document</option>
                        <option value="Box">Box</option>
                        <option value="Fragile">Fragile</option>
                     </select>
                  </div>

                  <div>
                     <label className="text-lg font-medium block mb-1">Delivery Destination</label>
                     <select
                        value={parcelType}
                        onChange={(e) => setParcelType(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                     >
                        <option value="">Select Parcel type</option>
                        <option value="Document">Document</option>
                        <option value="Box">Box</option>
                        <option value="Fragile">Fragile</option>
                     </select>
                  </div>

                  <div>
                     <label className="text-lg font-medium block mb-1">Weight (KG)</label>
                     <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter weight in KG"
                        className="w-full border p-2 rounded"
                        required
                     />
                  </div>

                  <div className="flex gap-4">
                     <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-2 rounded"
                     >
                        Reset
                     </button>
                     <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded"
                     >
                        Calculate
                     </button>
                  </div>
               </div>

               {/* Cost Output */}
               <div className="text-center w-full md:w-1/2">
                  <h1 className="text-[60px] md:text-[100px] font-bold text-green-600">
                     {cost !== null ? `${cost} Tk` : "৳ 0"}
                  </h1>
                  <p className="text-gray-600">Estimated Delivery Cost</p>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Pricing;
