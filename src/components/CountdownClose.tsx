import React from "react";
import Countdown from "./Countdown";

const CountdownClose = () => {
  const handleCountdownFinish = () => {
    alert("Time's up!");
  };
  const targetDate =
    new Date().getTime() +
    1 * 24 * 60 * 60 * 1000 +
    3 * 60 * 60 * 1000 +
    45 * 60 * 1000;
  return (
    <section id="countdown">
      <div className="bg-black text-white font-geist flex flex-col items-center px-7 py-12">
        <h1 className="font-bold text-base xs:text-xl sm:text-3xl">
          {" "}
          CLOSING REGISTRATION IN :{" "}
        </h1>
        <Countdown
          targetDate={targetDate}
          onFinish={handleCountdownFinish}
          className="text-4xl xs:text-6xl sm:text-7xl bg-gradient-to-br from-white to-[#1b24c4] inline-block text-transparent bg-clip-text mt-3 xs:mt-10"
        />
        <div className="flex gap-6 xs:gap-20 sm:gap-24 sm:text-lg font-bold bg-gradient-to-br from-white to-[#1b24c4] text-transparent bg-clip-text">
          <p> Days </p> <p> Hours </p> <p> Minutes </p>
        </div>
        <button className="bg-[#7043d9] px-7 py-3 rounded-full text-sm xs:text-base font-semibold mt-10 hover:scale-105 duration-200">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default CountdownClose;
