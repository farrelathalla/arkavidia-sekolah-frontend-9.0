import React, { useState } from "react";

// Define the type for FAQ
interface FAQ {
  question: string;
  answer: string;
}

// Define the FAQ component
const FAQBox: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  // State to track which FAQ is currently expanded
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle the visibility of the answer
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Close if it's already open, otherwise open it
  };

  return (
    <div className="space-y-4 w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className=" bg-black text-white shadow-md rounded-lg overflow-hidden font-geist"
        >
          {/* Question with a button to toggle the answer */}
          <div
            className="flex justify-between items-center px-6 py-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h4 className="font-semibold text-lg">{faq.question}</h4>
            <button
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Answer (toggle visibility based on openIndex state) */}
          {openIndex === index && (
            <div className="px-6 py-4 text-black bg-white border-2 border-black font-geistMono">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQBox;
