import React from "react";
import { appDetails } from "./constants";

const ApplicationsDetails = () => {
  return (
    <div className="mt-8 py-6 px-8 rounded-[0.8rem] bg-white">
      <div className="flex items-center border-b-[0.063rem] border-gray-200 text-[0.9rem]">
        <span className="font-bold text-xl text-[#082353] border-b-0 border-[0.063rem] p-[0.7rem] mr-[0.8rem] border-gray-200">
          Application Details
        </span>
        <span className="text-[#51a4fb] text-lg p-[0.4rem] mr-[0.8rem] cursor-pointer">
          Documents
        </span>
        <span className="text-[#51a4fb] text-lg p-[0.4rem] mr-[0.8rem] cursor-pointer">
          Comments
        </span>
      </div>
      <div className="flex mt-8 min-h-32">
        <div className="flex flex-col mr-8">
          <div
            className="bg-gray-200 text-[#082353] font-medium
           flex items-center mb-4 rounded-[0.3rem] py-3  text-[0.9rem] px-6"
          >
            <img
              className="h-4 mr-2.5"
              src="/images/payment-option-icon.svg"
              alt="payment option icon"
            />
            <span>Payment Option</span>
          </div>
          <div
            className="text-[#A7A7A7] font-medium
           flex items-center mb-4 rounded-[0.3rem] py-3  text-[0.9rem] px-6"
          >
            <img
              className="h-4 mr-2.5"
              src="/images/employment-details-icon.svg"
              alt="Employment Details icon"
            />
            <span>Employment Details</span>
          </div>
          <div
            className="text-[#A7A7A7] font-medium
           flex items-center mb-4 rounded-[0.3rem] py-3  text-[0.9rem] px-6"
          >
            <img
              className="h-4 mr-2.5"
              src="/images/financial-information-icon.svg"
              alt="Financial Information icon"
            />
            <span>Financial Information</span>
          </div>
          <div
            className="text-[#A7A7A7] font-medium
           flex items-center mb-4 rounded-[0.3rem] py-3  text-[0.9rem] px-6"
          >
            <img
              className="h-4 mr-2.5"
              src="/images/rent-information-icon.svg"
              alt="rent information icon"
            />
            <span>Rent Information</span>
          </div>
          <div
            className="text-[#A7A7A7] font-medium
           flex items-center mb-4 rounded-[0.3rem] py-3  text-[0.9rem] px-6"
          >
            <img
              className="h-4 mr-2.5"
              src="/images/landlord-details-icon.svg"
              alt="Landlord Details icon"
            />
            <span>Landlord Details</span>
          </div>
          <div
            className="text-[#A7A7A7] font-medium
           flex items-center mb-4 rounded-[0.3rem] py-3  text-[0.9rem] px-6"
          >
            <img
              className="h-4 mr-2.5"
              src="/images/referee-details-icon.svg"
              alt="referee Details icon"
            />
            <span>Referee Details</span>
          </div>
        </div>
        <div className="bg-[#0000001a] rounded-lg w-[74%] py-4 self-start px-10">
          {/* <ul className="list-disc list-inside bg-pink-400 flex flex-col justify-self-start text-[0.7rem] flex-wrap text-[#585858] font-medium mb-4">
          <li className="font-medium my-2.5">
              <span>What's your accomodation status?</span>
              <span className="text-[#082353] pl-4 block my-1 text-[0.85rem]">Looking to renew my rent</span>
            </li>
            <li className="font-medium my-2.5">
              <span>How much is the requested amount?</span>
              <span>1,200,00</span>
            </li>
            <li className="font-medium my-2.5">
              <span> How much do you earn monthly?</span>
              <span>400,00</span>
            </li>
            <li className="font-medium my-2.5">
              <span>Choose a monthly repayment plan</span>
              <span className="text-[#082353] pl-4 block my-1 text-[0.85rem]">3 months</span>
            </li>
            </ul> */}
          <ul className="list-disc list-inside flex flex-col justify-self-start text-[0.7rem] flex-wrap text-[#585858] font-medium mb-4">
            {appDetails.map((detail) => {
              return (
                <li className="font-medium my-2.5">
                  <span>{detail.label}</span>
                  <span className={detail.valueClass}>{detail.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsDetails;
