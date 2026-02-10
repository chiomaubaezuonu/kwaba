;

import Analysis from "@/components/analysis";
import Container from "@/components/Container";
import KwabaButton from "@/components/KwabaButton";
import LandlordVerificationForm from "@/components/LandlordVerificationForm";
import LandlordVerification from "@/components/LandlordVerificationForm";
import { useGlobalContext } from "@/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";
import { title } from "process";

import React, { useState } from "react";

export const verificationSteps = [
  { title: "Employer Check", status: true },
  { title: "Salary Analysis", status: false },

  { title: "Landlord and Renter Verification", status: false },
  { title: "Referee Confirmation", status: false },
  { title: "Credit Check", status: false },
];
export const questions = [
  { id: 1, question: "Does employer's website exist?"},
  { id: 2, question: "Is work email '@company'?" },
  { id: 3, question: "Online profile match?" },
  { id: 4, question: "Employer verified renter?" },
  { id: 5, question: "Does landlord know renter?", answer: "" },
  { id: 6, question: "Receipt for last payment", answer: "" },
  { id: 7, question: " Does referee know renter?", answer: "" },
  { id: 8, question: "Vouches good character?", answer: "" },
  { id: 9, question: "Email confirmation standing as referee?", answer: "" },
];

const RenterScreeningVerify = () => {
  const [answer, setAnswer] = useState("Yes");

  const navigate = useNavigate();

  const {
    showSalaryAnalysis,
    setShowSalaryAnalysis,
    showLandlordVerification,
    setShowLandlordVerification,
  } = useGlobalContext();

  return (
    <Container>
      {/* First thing to do, make sure that all options are not selected just by clicking one option */}
      <span
        onClick={() => navigate(-1)}
        className="transition duration-300 ease-in-out hover:bg-[#0000000D] cursor-pointer inline-flex items-center rounded-[0.3rem] py-2.5 px-6 mb-2"
      >
        <img src="/images/left-arrow.svg" alt="" className="w-4 mr-4" />
        <span className="text-base font-bold text-[#a8a7a7]">
          Back to Renter
        </span>
      </span>
      {!showSalaryAnalysis && !showLandlordVerification && (
        <div className="p-6 rounded-[0.8rem] bg-white text-[#082353]">
          <div className="block mb-6 text-2xl">
            <strong>Employee Verification - </strong>{" "}
            <span> Employer Check</span>
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
                    {step.title}
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
                        <span>{question.question}</span>
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
              <div className="flex font-semibold ">
                <div className="text-[0.9rem]">
                  {questions.slice(2, 4).map((question, index) => (
                    <div key={index} className="mb-8">
                      <span className="flex items-center">
                        <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                        <span>{question.question}</span>
                      </span>
                      <div className="flex items-center mt-[0.4rem] font-black">
                        <span
                          onClick={() =>
                            question.id === index
                              ? setAnswer("No")
                              : setAnswer("Yes")
                          }
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
            <KwabaButton
              onClick={() => setShowSalaryAnalysis(true)}
              className="ml-6 cursor-pointer bg-[#51a4fb] text-white rounded-[0.3rem] py-2.5 px-8 border border-[#51a4fb]"
            >
              Next
            </KwabaButton>
          </div>
        </div>
      )}
      {showSalaryAnalysis && !showLandlordVerification && <Analysis />}
      {showLandlordVerification && <LandlordVerificationForm />}
    </Container>
  );
};

export default RenterScreeningVerify;
