import React, { useState } from "react";
import {
  questions,
  verificationSteps,
} from "../renter-screening/[id]/verify/page";
import KwabaButton from "./KwabaButton";
import { useGlobalContext } from "../GlobalContext";
import Verification from "./Verification";
import { Input } from "antd";

const tenancyDuration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LandlordVerificationForm = () => {
  const { showSalaryAnalysis, setShowSalaryAnalysis } = useGlobalContext();
  const [answer, setAnswer] = useState("Yes");

  return (
    <div className="p-6 rounded-[0.8rem] bg- bg-white text-[#082353]">
      <div className="block mb-6 text-xl md:text-2xl">
        <strong>Employee Verification - </strong>{" "}
        <span> Landlord and Renter Verification</span>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        <Verification />

        <div className="ml-0 md:ml-8 mt-4 md:mt-0 flex flex-col md:flex-row border-b border-b-gray-200 w-full self-stretch">
          <div>
            <div className="mb-4 font-semibold text-[#a7a7a7] pb-2.5 border-b border-b-gray-100">
              LANDLORD
            </div>
            <form action="">
              <div className="mb-8">
                {questions.slice(4, 5).map((question, index) => (
                  <div key={index} className="mb-8">
                    <span className="flex items-center">
                      <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                      <span>{question.question}</span>
                    </span>
                    <div className="flex items-center mt-[0.4rem] font-extrabold">
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

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Right to property</span>
                </span>
                <div className="flex items-center mt-[0.4rem] font-extrabold">
                  <span
                    onClick={() => setAnswer("Yes")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "Yes"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Landlord
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Caretaker
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Agent
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Tenants duration in property</span>
                </span>
                <div className="items-center mt-[0.4rem] font-extrabold">
                  <span
                    onClick={() => setAnswer("Yes")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "Yes"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    New Tenant
                  </span>
                </div>
                <div className="flex flex-wrap md:flex-nowrap mt-[0.4rem]">
                  {tenancyDuration.map((tenant, index) => (
                    <span
                      key={index}
                      className="flex flex-col items-center mt-[0.4rem] cursor-pointer py-2.5 px-3.5  mr-2.5 text-[0.9rem] border border-gray-200 text-[#878787]"
                    >
                      <span className="mb-4">{tenant}</span>
                      <span>Years</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Last rent payment method</span>
                </span>
                <div className="flex md:flex-row items-center mt-[0.4rem] font-extrabold">
                  <span
                    onClick={() => setAnswer("Yes")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "Yes"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Bank transfer/deposit
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Cash
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Cheque
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Type of property</span>
                </span>
                <div className="items-center mt-[0.4rem]">
                  <input
                    placeholder="Enter property type"
                    className="outline-none border border-[#c3c3c3] w-40 mt-2.5 py-[0.4rem] px-2.5 text-[0.85rem] rounded-[0.2rem]"
                  />
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Property address</span>
                </span>
                <div className="items-center mt-[0.4rem]">
                  <input
                    placeholder="Enter property address"
                    className="outline-none border border-[#c3c3c3] w-80 mt-2.5 py-[0.4rem] px-2.5 text-[0.85rem] rounded-[0.2rem]"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <span className="flex items-center">
                    <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                    <span>Receipt for last payment</span>
                  </span>
                  <div className="flex items-center mt-[0.4rem] font-extrabold">
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
              </div>

              <div className="mt-16 text-[#a7a7a7] font-semibold pb-2.5 text-[1.1rem] border-b border-b-gray-200">
                RENTER
              </div>

              <div className="mb-8">
                <span className="flex items-center mt-4 md:mt-0">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Last rent made to</span>
                </span>
                <div className="flex items-center mt-[0.4rem] font-extrabold">
                  <span
                    onClick={() => setAnswer("Yes")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "Yes"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Landlord
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Caretaker
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Agent
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Duration in property</span>
                </span>
                <div className="items-center mt-[0.4rem] font-extrabold">
                  <span
                    onClick={() => setAnswer("Yes")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "Yes"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border   border-[#878787] bg-white"
                    }`}
                  >
                    New Tenant
                  </span>
                </div>
                <div className="flex flex-wrap md:flex-nowrap mt-[0.4rem]">
                  {tenancyDuration.map((tenant, index) => (
                    <span
                      key={index}
                      className="flex flex-col items-center mt-[0.4rem] cursor-pointer py-2.5 px-3.5  mr-2.5 text-[0.9rem] border-[0.04rem] border-[#878787] text-[#878787]"
                    >
                      <span className="mb-4">{tenant}</span>
                      <span>Years</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Rent amount</span>
                </span>
                <div className="items-center mt-[0.4rem]">
                  <input
                    placeholder="Enter rent amount"
                    className="outline-none border border-[#c3c3c3] w-40 mt-2.5 py-[0.4rem] px-2.5 text-[0.85rem] rounded-[0.2rem]"
                  />
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Last rent payment methods</span>
                </span>
                <div className="flex items-center mt-[0.4rem] font-extrabold">
                  <span
                    onClick={() => setAnswer("Yes")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "Yes"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Bank transfer/deposit
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Cash
                  </span>
                  <span
                    onClick={() => setAnswer("No")}
                    className={`text-[0.9rem] cursor-pointer py-2.5 px-3.5 mr-2.5 rounded-[0.2rem] ${
                      answer === "No"
                        ? "border border-[#51a4fb] text-[#082353] bg-[#e7f7ff]"
                        : "text-[#878787] border border-[#878787] bg-white"
                    }`}
                  >
                    Cheque
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Type of property</span>
                </span>
                <div className="items-center mt-[0.4rem]">
                  <input
                    placeholder="Enter property type"
                    className="outline-none border border-[#c3c3c3] w-40 mt-2.5 py-[0.4rem] px-2.5 text-[0.85rem] rounded-[0.2rem]"
                  />
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center">
                  <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                  <span>Property address</span>
                </span>
                <div className="items-center mt-[0.4rem]">
                  <input
                    placeholder="Enter property address"
                    className="outline-none border border-[#c3c3c3] w-80 mt-2.5 py-[0.4rem] px-2.5 text-[0.85rem] rounded-[0.2rem]"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-8">
                  <span className="flex items-center">
                    <span className="rounded-full w-1 h-1 bg-[#082353] mr-2.5"></span>
                    <span>Receipt for last payment</span>
                  </span>
                  <div className="flex items-center mt-[0.4rem] font-extrabold">
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
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* bottom button */}
      <div className="flex m-6 justify-end mr-0 md:mr-6">
        <KwabaButton
          onClick={() => setShowSalaryAnalysis(true)}
          className="ml-6 cursor-pointer bg-white text-[#000c] rounded-[0.3rem] py-2.5 px-8 border border-[#a7a7a7]"
        >
          Back
        </KwabaButton>
        <KwabaButton className="ml-6 cursor-pointer bg-[#51a4fb] text-white rounded-[0.3rem] py-2.5 px-8 border border-[#51a4fb]">
          Next
        </KwabaButton>
      </div>
    </div>
  );
};

export default LandlordVerificationForm;
