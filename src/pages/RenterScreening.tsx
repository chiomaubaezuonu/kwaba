;
import React from "react";
import FilterBar, { FilterBarProps } from "../components/FilterBar";
import Container from "../components/Container";
import { RenterFilter, useGlobalContext } from "../GlobalContext";
import Table from "../components/Table";


 export const renterFilterData: FilterBarProps["filterData"] = [
  {
    filterName: "Credit under writing",
    count: 35,
    image: "/images/renters-icon.svg",
  },
  {
    filterName: "Pending renter acceptance",
    count: 10,
    image: "/images/review-icon.svg",
  },
  {
    filterName: "Renter verification",
    count: 12,
    image: "/images/stopwatch-icon.svg",
  },
  {
    filterName: "Pending final review",
    count: 5,
    image: "/images/stopwatch-icon.svg",
  },
];

const page = () => {
  const { selectedFilter, setSelectedFilter } = useGlobalContext();
console.log(renterFilterData)
  return (
    <Container>
      <h2 className="text-base font-bold text-[#a8a7a7]">Renter Screening</h2>
      <FilterBar filterData={renterFilterData} />
      <Table />
    </Container>
  );
};

export default page;
