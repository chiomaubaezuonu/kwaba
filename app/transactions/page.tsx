"use client";
import React from "react";
import { TransactionsFilter, useGlobalContext } from "../GlobalContext";
import Container from "../components/Container";
import FilterBar, { FilterBarProps } from "../components/FilterBar";
import Table from "../components/Table";


export const transactionFilterData: FilterBarProps["filterData"] = [
  {
    filterName: "Awaiting Disbursement",
    count: 10,
    image: "/images/completed-renter-icon.svg",
  },
  {
    filterName: "Active",
    count: 10,
    image: "/images/apply-minus-icon.svg",
  },
  {
    filterName: "Completed",
    count: 5,
    image: "/images/apply-minus-icon.svg",
  },
  {
    filterName: "Defaults",
    count: 5,
    image: "/images/apply-minus-icon.svg",
  },
];

const page = () => {
  const { selectedFilter } = useGlobalContext();

  return (
    <Container>
      <h2 className="text-base font-bold text-[#a8a7a7]">Renter Screening</h2>
      <FilterBar filterData={transactionFilterData} />
      <Table />
    </Container>
  );
};

export default page;
