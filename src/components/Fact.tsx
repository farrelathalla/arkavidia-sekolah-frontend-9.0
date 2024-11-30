import React, { useState, useEffect } from "react";

// Define the Fact type
interface Fact {
  title: string;
  description: string;
}

// Define the component props
interface FactBoxProps {
  facts: Fact[];
  scrollInterval: number; // Time interval in milliseconds for the auto-scroll effect
  className?: string; // Optional className for styling
}

const FactBox: React.FC<FactBoxProps> = ({
  facts,
  scrollInterval,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Scroll the FactBox horizontally every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length); // Cycle through facts
    }, scrollInterval);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [facts.length, scrollInterval]);

  // Style the FactBox to have sliding animation (adjust timing and behavior here)
  const scrollStyle = {
    transform: `translateX(-${currentIndex * 100}%)`, // Move left by 100% of the container width per scroll
    transition: "transform 0.5s ease-in-out", // Smooth transition
  };

  return (
    <div
      className={`overflow-hidden relative font-geist ${className}`}
      style={{ width: "100%" }} // Full width of parent
    >
      <div className="flex" style={scrollStyle}>
        {facts.map((fact, index) => (
          <div key={index} className="flex-none w-full px-6 py-4">
            <div className="bg-[#FFEADF] shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
              <h4 className="font-semibold text-lg text-center">
                {fact.title}
              </h4>
              <p className="text-sm font-geistMono text-center">
                {fact.description}
              </p>
              <button className="text-center mt-2 bg-[#1F307C] font-bold text-white px-5 py-2 rounded-lg">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactBox;
