"use client";
import React, { useState, useEffect } from "react";

// Define the types for the props
interface CountdownProps {
  targetDate: number; // The target date in milliseconds
  onFinish?: () => void; // Callback when the countdown finishes
  className?: string; // Custom CSS class for styling
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  onFinish,
  className = "",
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Calculate the initial time left based on the target date
    const calculateTimeLeft = (): number => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      return distance > 0 ? distance : 0;
    };

    setTimeLeft(calculateTimeLeft());

    // Set an interval to update the countdown every second
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Call the onFinish callback when the countdown finishes
      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
        if (onFinish) onFinish();
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate, onFinish]);

  // Convert milliseconds to Days, Hours, Minutes format
  const formatTime = (time: number): string => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    // Return the formatted string with leading zeroes for single digits
    return `${String(days).padStart(2, "0")} : ${String(hours).padStart(
      2,
      "0"
    )} : ${String(minutes).padStart(2, "0")}`;
  };

  return (
    <div className={`${className}`}>
      <p className="font-bold">{formatTime(timeLeft)}</p>
    </div>
  );
};

export default Countdown;
