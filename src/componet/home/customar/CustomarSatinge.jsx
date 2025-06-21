

function CustomarSatinge() {
   const reviews = [
      {
         name: "Donald Jackman",
         role: "Content Creator",
         image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
         text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      },
      {
         name: "Richard Nelson",
         role: "Instagram Influencer",
         image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
         text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      },
      {
         name: "James Washington",
         role: "Marketing Manager",
         image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
         text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      }
   ];
    
   return (
      <>
         
         <div className="container mx-auto py-20">
            <img className="mx-auto py-4" src="/customer-top.png" alt="" />

            <h1 className="text-center text-2xl font-bold mb-4">What our customers are sayings</h1>

            <p className="text-center text-gray-500 text-[16px] ">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce<br /> pain, and strengthen your body with ease!</p>


            <div className="flex flex-wrap py-8 items-center justify-center gap-6 pt-14">
               {reviews.map((review, index) => (
                  <div
                     key={index}
                     className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5"
                  >
                     <div className="flex flex-col items-center px-5 py-4 relative">
                        <img
                           className="h-24 w-24 absolute -top-14 rounded-full"
                           src={review.image}
                           alt={`userImage${index}`}
                        />
                        <div className="pt-8 text-center">
                           <h1 className="text-lg font-medium text-gray-800">{review.name}</h1>
                           <p className="text-gray-800/80">{review.role}</p>
                        </div>
                     </div>
                     <p className="text-gray-500 px-6 text-center">{review.text}</p>

                     <div className="flex justify-center pt-4">
                        <div className="flex gap-0.5">
                           {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                 <svg
                                    key={i}
                                    width="18"
                                    height="18"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                                       fill="#FF532E"
                                    />
                                 </svg>
                              ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
         
      </>
   );
}

export default CustomarSatinge;