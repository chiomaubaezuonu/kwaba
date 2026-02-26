;
import React from "react";
import Table from "../components/Table";
import { useGlobalContext, ApplicationsFilter } from "../GlobalContext";
import FilterBar, { FilterBarProps } from "../components/FilterBar";
import Container from "../components/Container";

export const applicationsFilterData: FilterBarProps["filterData"] = [
  {
    filterName: "New Applications",
    count: 35,
    image: "/images/apply-plus-icon.svg",
  },
  {
    filterName: "Assigned Applications",
    count: 12,
    image: "/images/apply-minus-icon.svg",
  },
  {
    filterName: "Incomplete Applications",
    count: 3,
    image: "/images/apply-minus-icon.svg",
  },
  {
    filterName: "Declined Applications",
    count: 5,
    image: "/images/apply-minus-icon.svg",
  },
  {
    filterName: "Cancelled Applications",
    count: 0,
    image: "/images/apply-plus-icon.svg",
  },
];

const Applications = () => {
  const { selectedFilter, setSelectedFilter } = useGlobalContext();

  return (
    <Container>
      <h2 className="text-base font-bold text-[#a8a7a7]">Applications</h2>
      <FilterBar filterData={applicationsFilterData} />
      <Table />
    </Container>
  );
};

export default Applications;
