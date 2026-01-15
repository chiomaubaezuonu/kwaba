"use client";
import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  TableRow,
  accStatuses,
  colors,
  firstNames,
  lastNames,
  locations,
  title,
  empStatuses,
} from "./components/constants";
import { applicationsFilterData } from "./applications/page";
import { usePathname } from "next/navigation";
import { renterFilterData } from "./renter-screening/page";
import { transactionFilterData } from "./transactions/page";

export type ApplicationsFilter =
  | "New Applications"
  | "Assigned Applications"
  | "Incomplete Applications"
  | "Declined Applications"
  | "Cancelled Applications";

export type RenterFilter =
  | "Credit under writing"
  | "Pending renter acceptance"
  | "Renter verification"
  | "Pending final review";

export type TransactionsFilter =
  | "Awaiting Disbursement"
  | "Active"
  | "Completed"
  | "Defaults";

interface ContextType {
  selectedFilter: ApplicationsFilter | RenterFilter | TransactionsFilter;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<ApplicationsFilter | RenterFilter | TransactionsFilter>
  >;
  rowCount: number;
  rows: TableRow[];
  setRows: React.Dispatch<React.SetStateAction<TableRow[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  displayedRows: TableRow[];
  handlePagination: (i: number) => void;
  firstIndex: number;
  showSalaryAnalysis: boolean;
  setShowSalaryAnalysis: React.Dispatch<SetStateAction<boolean>>;
  showLandlordVerification: boolean;
  setShowLandlordVerification: React.Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextType | undefined>(undefined);
export const GlobalProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedFilter, setSelectedFilter] =
    useState<ContextType["selectedFilter"]>("New Applications");
  const [rows, setRows] = useState<TableRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSalaryAnalysis, setShowSalaryAnalysis] = useState(false);
  const [showLandlordVerification, setShowLandlordVerification] =
    useState(false);

  const pathName = usePathname();

  const rowCount =
    pathName === "/applications"
      ? applicationsFilterData.find(
          (item) => item.filterName === selectedFilter
        )?.count || 0
      : pathName === "/renter-screening"
      ? renterFilterData.find((item) => item.filterName === selectedFilter)
          ?.count || 0
      : pathName === "/transactions"
      ? transactionFilterData.find((item) => item.filterName === selectedFilter)
          ?.count || 0
      : 35;

  // const generatedRows: TableRow[] = Array.from({ length: rowCount }, (_, i) => {
  //   const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  //   const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  //   const fullName = `${firstName} ${lastName}`;
  //   const color = colors[Math.floor(Math.random() * colors.length)];
  //   const location = locations[Math.floor(Math.random() * locations.length)];
  //   const salary = Math.ceil(Math.random() * 10) * 1000000;
  //   const employmentStatus =
  //     empStatuses[Math.floor(Math.random() * empStatuses.length)];
  //   const accommodationStatus =
  //     accStatuses[Math.floor(Math.random() * accStatuses.length)];
  //   const requestedAmount = `₦${(
  //     Math.ceil(Math.random() * 10) * 1000000
  //   ).toLocaleString()}`;
  //   const email = `${firstName}@gmail.com`;
  //   const created = new Date().toDateString();
  //   const prefixes = ["070", "080", "081", "090", "091", "071"];
  //   const phone = `${
  //     prefixes[Math.floor(Math.random() * prefixes.length)]
  //   }${Array(8)
  //     .fill("")
  //     .map(() => Math.floor(Math.random() * 10))
  //     .join("")}`;
  //   return {
  //     fullName,
  //     initial: fullName[0],
  //     color,
  //     location,
  //     salary: `₦${salary.toLocaleString()}`,
  //     employmentStatus,
  //     accommodationStatus,
  //     requestedAmount,
  //     email,
  //     phone,
  //     created,
  //   };
  // });

  useEffect(() => {
    if (pathName.startsWith("/applications")) {
      setSelectedFilter("New Applications");
    } else if (pathName.startsWith("/renter-screening")) {
      setSelectedFilter("Credit under writing");
    } else {
      setSelectedFilter("Awaiting Disbursement");
    }
  }, [pathName]);

  const handlePagination = (index: number) => {
    setCurrentPage(index + 1);
  };
  const rowsPerPage = rowCount > 10 ? 10 : rowCount;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;

  const displayedRows = [...rows].slice(firstIndex, lastIndex);

  return (
    <GlobalContext.Provider
      value={{
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
        showSalaryAnalysis,
        setShowSalaryAnalysis,
        showLandlordVerification,
        setShowLandlordVerification,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
