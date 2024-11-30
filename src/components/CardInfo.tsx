import React from "react";

interface CardProps {
  title: string;
  description: string;
  classname: string;
}
const CardInfo = ({ title, description, classname }: CardProps) => {
  return (
    <div>
      <div
        className={`${classname} font-bold w-full flex flex-col items-center justify-center p-5 rounded-xl text-center font-geist`}
      >
        <h1 className="bg-white w-full rounded-lg p-5 md:p-10 text-3xl md:text-5xl">
          {" "}
          {title}{" "}
        </h1>
        <h3 className="text-white p-5 md:p-10 text-xl md:text-3xl">
          {" "}
          {description}{" "}
        </h3>
      </div>
    </div>
  );
};

export default CardInfo;
