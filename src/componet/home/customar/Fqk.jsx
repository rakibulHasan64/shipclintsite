import { useState } from "react";

function Fqk() {
   const faqs = [
      {
         question: "What is Posture Pro?",
         answer:
            "Posture Pro is a smart wearable device that helps improve posture by providing real-time feedback and gentle reminders.",
      },
      {
         question: "How long should I wear it daily?",
         answer:
            "You can start with 15-30 minutes per day and gradually increase as your posture improves.",
      },
      {
         question: "Is it suitable for children?",
         answer:
            "Yes, Posture Pro is safe for children above 10 years old with adult supervision.",
      },
      {
         question: "How long should I wear it daily?",
         answer:
            "You can start with 15-30 minutes per day and gradually increase as your posture improves.",
      },
      {
         question: "Is it suitable for children?",
         answer:
            "Yes, Posture Pro is safe for children above 10 years old with adult supervision.",
      },
   ];

   const [activeIndex, setActiveIndex] = useState(null);

   const toggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   return (
      <div className="container mx-auto py-20 px-4">
         <h3 className="text-2xl font-bold text-center">
            Frequently Asked Questions (FAQ)
         </h3>
         <p className="text-center text-gray-500 mt-3 mb-8">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
            <br />
            Achieve proper alignment, reduce pain, and strengthen your body with
            ease!
         </p>

         <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
               <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-sm"
               >
                  <button
                     onClick={() => toggle(index)}
                     className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                  >
                     <span>{faq.question}</span>
                     <span>{activeIndex === index ? "−" : "+"}</span>
                  </button>
                  {activeIndex === index && (
                     <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
}

export default Fqk;
