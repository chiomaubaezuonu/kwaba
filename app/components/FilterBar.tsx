"use client"
import React from "react";
import {
  applicationsFilterData,
  // ApplicationFilter,
} from "../applications/page";
import { ApplicationsFilter, RenterFilter, TransactionsFilter, useGlobalContext } from "../GlobalContext";
import { usePathname } from "next/navigation";


export interface FilterBarProps {
  filterData: {
    filterName: ApplicationsFilter | RenterFilter | TransactionsFilter;
    count: number;
    image: string;
  }[];
}

const FilterBar = ({ filterData }: FilterBarProps) => {
  const { selectedFilter, setSelectedFilter } = useGlobalContext();

  return (
    <div className="flex w-[90%] mb-4 text-sm">
      {filterData.map((filter, index) => (
        <div
          key={index}
          onClick={() => setSelectedFilter(filter.filterName)}
          className={`${
            selectedFilter === filter.filterName
              ? "bg-[#51A4FB]"
              : "shadow-md bg-white"
          } text-[#51a4fb] w-56 rounded-lg p-2 mr-[0.95rem] cursor-pointer transition duration-300 ease-in-out shadow-sm`}
        >
          <div className="flex items-center justify-between mb-[0.95rem]">
            <img
              src={filter.image}
              alt="applications image"
              className="w-4.5"
            />
            <span className="py-1 px-4 text-sm text-[#51a4fb] bg-[#e2f0ff] self-center rounded-2xl">
              {filter.count}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p
              className={`text-xs ${
                selectedFilter === filter.filterName
                  ? "text-white"
                  : "text-[#51A4FB]"
              }`}
            >
              {" "}
              {filter.filterName}
            </p>
            <svg
              _ngcontent-emv-c117=""
              className="svg-inline--fa fa-arrow-right fa-w-14 option-arrow w-5"
              viewBox="0 0 448 512"
            >
              <path
                fill={`${
                  selectedFilter === filter.filterName
                    ? "#00204f"
                    : "#A7A7A7"
                }`}
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
