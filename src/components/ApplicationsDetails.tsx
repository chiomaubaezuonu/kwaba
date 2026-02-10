;
import React, { useState } from "react";
import { appDetails } from "./constants";
import { useLocation} from "react-router-dom";
import Table from "./Table";
import Comments from "./comments";
import Documents from "./Documents";

const ApplicationsDetails = () => {
  const location = useLocation();

  const [details, setDetails] = useState({
    applicationsDetails: true,
    documents: false,
    comments: false,
  });

  interface TableData {
    title: string;
    data: string;
  }

  const tableData = [
    {
      title: "Monthly Payment",
      data: "₦70,833.33",
    },
    {
      title: "Amount Paid",
      data: "₦70,833.33",
    },
    {
      title: "Payment Date",
      data: "20 April, 2026",
    },
    {
      title: "Payment Status",
      data: "PAID",
    },
  ];

  const tableHeader = [
    "Monthly Payment",
    "Amount Paid",
    "Payment Date",
    "Payment Status",
  ];

  console.log(details);

  return (
    <div>
      {!location.pathname.startsWith("/transactions") ? (
        <div className="mt-8 py-6 px-8 rounded-[0.8rem] bg-white">
          <div className="flex items-center relative border-b-[0.063rem] bg-white border-gray-200 text-[0.9rem]">
            <span
              onClick={() =>
                setDetails({
                  applicationsDetails: true,
                  documents: false,
                  comments: false,
                })
              }
              className={`${
                details.applicationsDetails
                  ? "-mb-0.5 scale-[1.15] text-[#082353] font-bold"
                  : "mb-0 border-none text-[#51a4fb]"
              } bg-white py-2.5 px-4 text-sm p-[0.4rem] border-b-0 border-[0.063rem] cursor-pointer mr-[0.8rem] border-gray-200`}
            >
              Application Details
            </span>
            <span
              onClick={() =>
                setDetails({
                  applicationsDetails: false,
                  documents: true,
                  comments: false,
                })
              }
              className={`${
                details.documents
                  ? "-mb-1 scale-[1.15] text-[#082353] font-bold"
                  : "mb-0 border-none text-[#51a4fb]"
              } bg-white py-2.5 px-4 text-sm p-[0.4rem] border-b-0 border-[0.063rem] border-gray-200 mr-[0.8rem] cursor-pointer`}
            >
              Documents
            </span>
            <span
              onClick={() =>
                setDetails({
                  applicationsDetails: false,
                  documents: false,
                  comments: true,
                })
              }
              className={`${
                details.comments
                  ? "-mb-1 scale-[1.15] text-[#082353] font-bold"
                  : "mb-0 border-none text-[#51a4fb]"
              } bg-white py-2.5 px-4 text-[#51a4fb] border-b-0 border-[0.063rem] border-gray-200 text-sm p-[0.4rem] mr-[0.8rem] cursor-pointer`}
            >
              Comments
            </span>
          </div>
          {!details.comments && !details.documents && (
            <div className="flex mt-8 min-h-32">
              <div className="flex flex-col mr-8">
                <div
                  className="bg-gray-200 text-[#082353] font-medium
          flex items-center mb-4 rounded-[0.3rem] py-3  text-xs px-6"
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
          flex items-center mb-4 rounded-[0.3rem] py-3  text-xs px-6"
                >
                  <img
                    className="h-4 mr-2.5"
                    src="/images/employment-details-icon.svg"
                    alt="Employment Details icon"
                  />
                  <span className="whitespace-nowrap">Employment Details</span>
                </div>
                <div
                  className="text-[#A7A7A7] font-medium
          flex items-center mb-4 rounded-[0.3rem] py-3  text-xs px-6"
                >
                  <img
                    className="h-4 mr-2.5"
                    src="/images/financial-information-icon.svg"
                    alt="Financial Information icon"
                  />
                  <span className="whitespace-nowrap">
                    Financial Information
                  </span>
                </div>
                <div
                  className="text-[#A7A7A7] font-medium
          flex items-center mb-4 rounded-[0.3rem] py-3  text-xs px-6"
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
          flex items-center mb-4 rounded-[0.3rem] py-3  text-xs px-6"
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
          flex items-center mb-4 rounded-[0.3rem] py-3  text-xs px-6"
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
                <ul className="list-disc list-inside flex flex-col justify-self-start text-[0.7rem] flex-wrap text-[#585858] font-medium mb-4">
                  {appDetails.map((detail, index) => {
                    return (
                      <li key={index} className="font-medium my-2.5">
                        <span>{detail.label}</span>
                        <span className={detail.valueClass}>
                          {detail.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          {!details.applicationsDetails && !details.documents && <Comments />}
          {!details.applicationsDetails && !details.comments && <Documents />}
        </div>
      ) : (
        <div className="mt-8 py-6 px-8 rounded-[0.8rem] bg-white">
          <div className="flex items-center relative border-b-[0.063rem] border-gray-200 text-[0.9rem]">
            <span className="font-bold absolute top-2 left-0 text-xl text-[#082353] border-b-0 border-[0.063rem] p-[0.7rem] mr-[0.8rem] border-gray-200">
              Repayment Schedule
            </span>
            <span className="text-[#51a4fb] text-sm p-[0.4rem] mr-[0.8rem] cursor-pointer">
              Application Details
            </span>
            <span className="text-[#51a4fb] text-sm p-[0.4rem] mr-[0.8rem] cursor-pointer">
              Documents
            </span>
            <span className="text-[#51a4fb] text-sm p-[0.4rem] mr-[0.8rem] cursor-pointer">
              Comments
            </span>
          </div>
          <div className="block mt-8 min-h-32">
            <table className="mb-4 border-none w-[80%] text-[#212529] border-collapse">
              <thead>
                <tr>
                  {tableData.map((col, index) => {
                    return (
                      <th
                        key={index}
                        className="border-none p-3 text-[#0006] text-left text-xs"
                      >
                        {col.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }, (_, rowIndex) => {
                  return (
                    <tr
                      key={rowIndex}
                      className={`border-none p-3 ${
                        rowIndex % 2 !== 0 ? "bg-[#0000000d]" : ""
                      }`}
                    >
                      {tableData.map((row, colIndex) => (
                        <td
                          key={colIndex}
                          className="p-3 border-none text-[0.665rem]"
                        >
                          {row.data}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* <div className="flex flex-col mr-8">
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
              <ul className="list-disc list-inside flex flex-col justify-self-start text-[0.7rem] flex-wrap text-[#585858] font-medium mb-4">
                {appDetails.map((detail, index) => {
                  return (
                    <li key={index} className="font-medium my-2.5">
                      <span>{detail.label}</span>
                      <span className={detail.valueClass}>{detail.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsDetails;
