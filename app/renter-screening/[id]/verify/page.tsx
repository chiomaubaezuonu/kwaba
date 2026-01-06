"use client";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const verificationSteps = [
  "Employer Check",
  "Salary Analysis",
  "Landlord and Renter Verification",
  "Referee Confirmation",
  "Credit Check",
];
const questions = [
  "Does employer's website exist?",
  "Online profile match",
  "Is work email '@company'?",
  "Employer verified renter?",
];

const page = () => {
  const [answer, setAnswer] = useState("Yes");

  const router = useRouter();

  return (
    <Container>
      <span
        onClick={() => router.back()}
        className="transition duration-300 ease-in-out hover:bg-[#0000000D] cursor-pointer inline-flex items-center rounded-[0.3rem] py-2.5 px-6 mb-2"
      >
        <img src="/images/left-arrow.svg" alt="" className="w-4 mr-4" />
        <span className="text-base font-bold text-[#a8a7a7]">
          Back to Renter
        </span>
      </span>
      <div className="p-6 rounded-[0.8rem] bg-white text-[#082353]">
        <div className="block mb-6 text-2xl">
          <strong>Employee Verification - </strong> <span> Employer Check</span>
        </div>
        <div className="flex items-start">
          <div className="bg-[#f5f5f5] py-4 px-5 text-sm rounded-[0.8rem] w-60 flex flex-col ">
            {verificationSteps.map((step, index) => (
              <div key={index} className="flex items-center my-4">
                <span
                  className={`rounded-full w-3 h-3 flex items-center justify-center ${
                    index === 0 ? "bg-[#21ad26]" : "bg-[#c3c3c3]"
                  } mr-2.5`}
                >
                  {index === 0 && (
                    <img
                      src="/images/tick3.svg"
                      alt=""
                      className="w-3.5 h-2.5"
                    />
                  )}
                </span>
                <span
                  className={`${
                    index === 0 ? "font-bold" : "font-bold text-[#a7a7a7]"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="ml-8 flex  border border-t-0 border-x-0 border-b-gray-200 w-full self-stretch">
            <div className="mr-32 font-semibold">
              <div className="text-[0.9rem]">
                {questions.slice(0, 2).map((question, index) => (
                  <div key={index} className="mb-8">
                    <span className="flex items-center">
                      <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                      <span>{question}</span>
                    </span>
                    <div className="flex items-center mt-[0.4rem] font-black">
                      <span
                        onClick={() => setAnswer("Yes")}
                        className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                          answer === "Yes"
                            ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                            : "text-[#878787] border border-[#878787] bg-white"
                        }`}
                      >
                        Yes
                      </span>
                      <span
                        onClick={() => setAnswer("No")}
                        className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                          answer === "No"
                            ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                            : "text-[#878787] border border-[#878787] bg-white"
                        }`}
                      >
                        No
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="text-[0.9rem]">
                {questions.slice(0, 2).map((question, index) => (
                  <div key={index} className="mb-8">
                    <span className="flex items-center">
                      <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                      <span>{question}</span>
                    </span>
                    <div className="flex items-center mt-[0.4rem] font-black">
                      <span
                        onClick={() => setAnswer("Yes")}
                        className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                          answer === "Yes"
                            ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                            : "text-[#878787] border border-[#878787] bg-white"
                        }`}
                      >
                        Yes
                      </span>
                      <span
                        onClick={() => setAnswer("No")}
                        className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                          answer === "No"
                            ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                            : "text-[#878787] border border-[#878787] bg-white"
                        }`}
                      >
                        No
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-6 justify-end">
          <Button className="ml-6 bg-[#51a4fb] text-white rounded-[0.3rem] py-2.5 px-8 border border-[#51a4fb]">
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default page;
