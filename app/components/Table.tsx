"use client";
import React, { useEffect, useState } from "react";
import { applicationsFilterData } from "../applications/page";
import Button from "./Button";
import { buttonData } from "./Button";
import Input from "./Input";
import { useGlobalContext } from "../GlobalContext";
import { usePathname, useRouter } from "next/navigation";

const title = [
  "Renter",
  "Phone number",
  "Location",
  "Employment status",
  "Salary",
  "accomodation status",
  "Requested amount",
  "created",
];

const firstNames = [
  "James",
  "David",
  "Susan",
  "Mary",
  "Gloria",
  "Adam",
  "Ifeoma",
  "Johnson",
  "Uchenna",
];

const lastNames = [
  "Dolly",
  "Uba",
  "Femi",
  "Philips",
  "Martin",
  "Ola",
  "Cole",
  "Morris",
];
const accStatuses = ["Rent", "Store"];
const locations = [
  "Lagos",
  "Ogun",
  "Port Harcourt",
  "Ibadan",
  "Onitsha",
  "Owerri",
];
const empStatuses = ["Employed", "Self-employed", "Unemployed", "Employer"];
const payStatuses = ["On track", "Partial payment", "Defaulting"];
const declineReasons = [
  "Incomplete Documents",
  "Unavailable in city",
  "Insuffucient net income",
];
let colors = [
  "#820014",
  "#ff7a45",
  "#873800",
  "#ad6800",
  "#fadb14",
  "#bae637",
  "#389e0d",
  "#13c2c2",
  "#69c0ff",
  "#061178",
  "#9254de",
  "#eb2f96",
  "#434343",
];
type TableRow = {
  fullName: string;
  initial: string;
  color: string;
  email?: string;
  phone: number | string;
  location: string;
  employmentStatus: string;
  salary: number | string;
  accommodationStatus: string;
  requestedAmount: number | string;
  created?: string;
};

const Table = () => {
  const router = useRouter();
  const pathName = usePathname();

  const {
    selectedFilter,
    setSelectedFilter,
    rowCount,
    rows,
    setRows,
    currentPage,
    setCurrentPage,
    displayedRows,
    handlePagination,
    firstIndex,
  } = useGlobalContext();

  useEffect(() => {
    const generatedRows: TableRow[] = Array.from(
      { length: rowCount },
      (_, i) => {
        const firstName =
          firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName =
          lastNames[Math.floor(Math.random() * lastNames.length)];
        const fullName = `${firstName} ${lastName}`;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const location =
          locations[Math.floor(Math.random() * locations.length)];
        const salary = Math.ceil(Math.random() * 10) * 1000000;
        const employmentStatus =
          empStatuses[Math.floor(Math.random() * empStatuses.length)];
        const accommodationStatus =
          accStatuses[Math.floor(Math.random() * accStatuses.length)];
        const requestedAmount = `₦${(
          Math.ceil(Math.random() * 10) * 1000000
        ).toLocaleString()}`;
        const email = `${firstName}@gmail.com`;
        const created = new Date().toDateString();

        const prefixes = ["070", "080", "081", "090", "091", "071"];
        const phone = `${
          prefixes[Math.floor(Math.random() * prefixes.length)]
        }${Array(8)
          .fill("")
          .map(() => Math.floor(Math.random() * 10))
          .join("")}`;
        return {
          fullName,
          initial: fullName[0],
          color,
          location,
          salary: `₦${salary.toLocaleString()}`,
          employmentStatus,
          accommodationStatus,
          requestedAmount,
          email,
          phone,
          created,
        };
      }
    );
    setRows(generatedRows);
  }, [currentPage, selectedFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  return (
    <div className="p-6 bg-white rounded-xl text-[#000c]">
      <div className="flex justify-between">
        <strong>New Applications List</strong>
        <div className="mb-4 flex gap-1">
          {buttonData.map((data, index) => (
              <Button key={index} className={data.className}>
                <img src={data.image} alt="" className="w-4" />
                {data.text}
              </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center mx-0 mt-2 mb-6 gap-3">
        <div>
          <Input placeholder="Search" htmlType="text" />
        </div>
        <select name="" id="">
          <option value="">Select Filter</option>
          <option value="">First</option>
          <option value="">Second</option>
        </select>
        <Button className="bg-[#e5f2ff] text-[#51A4FB] ml-0  mt-5 border-[0.063rem] py-[0.35rem] px-6 border-[#51A4FB]">
          Search
        </Button>
      </div>

      <table className="table-fixed">
        <thead>
          <tr className="uppercase text-[#0000004d]">
            {title.map((titleItem, index) => (
              <th key={index} className="p-3 text-sm">
                {titleItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, index) => {
            const globalIndex = firstIndex + index;
            return (
              <tr
                key={index}
                onClick={() => router.push(`${pathName}/${globalIndex}`)}
                className="border-b-[0.063rem] border-[#0000000d] cursor-pointer"
              >
                {/* Renter: avatar + name */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 rounded-sm text-xs text-white flex items-center justify-center"
                      style={{ backgroundColor: row.color }}
                    >
                      {row.initial}
                    </div>
                    <div className="flex flex-col">
                      <span>{row.fullName}</span>
                      <p className="text-[#0000004d] text-[0.65rem]">
                        {row.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-3 text-sm">{row.phone}</td>
                <td className="p-3 text-sm">{row.location}</td>
                <td className="p-3 text-sm">{row.employmentStatus}</td>
                <td className="p-3 text-sm">{row.salary}</td>
                <td className="p-3 text-sm">{row.accommodationStatus}</td>
                <td className="p-3 text-sm">{row.requestedAmount}</td>
                <td className="p-3 text-sm">{row.created}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between">
        <div className="flex items-center mt-4 mb-8 text-sm">
          <span
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`bg-[#0000000D] hover:bg-[#87cfeb66] ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            } rounded-[0.2rem] py-2 px-4 mx-1.5 transition duration-300 ease-in-out`}
          >
            {currentPage !== 1 ? (
              <img
                className="w-2"
                src="/images/active-pagination-arrow-left.svg"
                alt="pagination left arrow"
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            ) : (
              <img
                className="w-2"
                src="/images/pagination-left-arrow.svg"
                alt="pagination left arrow"
              />
            )}
          </span>
          {Array.from({ length: Math.ceil(rowCount / 10) }, (_, i) => {
            return (
              <span
                onClick={() => handlePagination(i)}
                key={i}
                className={`cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-[#51A4FB]"
                    : "hover:bg-[#87cfeb66]"
                } hover:bg-[#87cfeb66] rounded-[0.2rem] py-2 px-4 mx-1.5 transition duration-300 ease-in-out`}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            className={`bg-[#0000000D] hover:bg-[#87cfeb66] ${
              currentPage === Math.ceil(rowCount / 10)
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } rounded-[0.2rem] py-2 px-4 mx-1.5 transition duration-300 ease-in-out`}
          >
            {currentPage !== Math.ceil(rowCount / 10) ? (
              <img
                className="w-2"
                src="/images/active-pagination-arrow-right.svg"
                alt="pagination left arrow"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              />
            ) : (
              <img
                className="w-2"
                src="/images/pagination-right-arrow.svg"
                alt="pagination left arrow"
              />
            )}
          </span>
        </div>
        <div>
          <span className="text-[#0000004d] text-sm">
            Showing {displayedRows.length} of {rowCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;

// Can't i use index from map
