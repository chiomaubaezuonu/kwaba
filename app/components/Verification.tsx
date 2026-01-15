import React from "react";

export const verificationSteps = [
  "Employer Check",
  "Salary Analysis",
  "Landlord and Renter Verification",
  "Referee Confirmation",
  "Credit Check",
];

const Verification = () => {
  return (
    <div className="bg-[#f5f5f5] py-4 px-5 text-sm rounded-[0.8rem] w-60 flex flex-col ">
      {verificationSteps.map((step, index) => (
        <div key={index} className="flex items-center my-4">
          <span
            className={`rounded-full w-3 h-3 flex items-center shrink-0 aspect-square justify-center ${
              index <= 2 ? "bg-[#21ad26]" : "bg-[#c3c3c3]"
            } mr-2.5`}
          >
            {index <= 2 && (
              <img src="/images/tick3.svg" alt="" className="w-3.5 h-2.5" />
            )}
          </span>
          <span
            className={`${
              index <= 2 ? "font-bold" : "font-bold text-[#a7a7a7]"
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Verification;
