import React, { useContext } from "react";
import { useGlobalContext } from "../GlobalContext";


interface ApplicationStagesProps{
   id?: number,
  className?: string,
}

export const applicationStages = [
  {
    id: 1,
    stage: "New Application",
  },
  {
    id: 2,
    stage: "Renter Verification",
  },
  {
    id: 3,
    stage: "In review",
  },
  {
    id: 4,
    stage: "Awaiting Acceptance",
  },
  {
    id: 5,
    stage: "Payment Setup",
  },
  {
    id: 6,
    stage: "Awaiting Disbursement",
  },
  {
    id: 7,
    stage: "Active",
  },
  {
    id: 8,
    stage: "Completed",
  },
  {
    id: 9,
    stage: "Declined",
  },
  {
    id: 10,
    stage: "Cancelled By Renter",
  },
];


const ApplicationStages = ({id, className= "" }: ApplicationStagesProps) => {

const { selectedFilter } = useGlobalContext()

  return (
    <div>
      {applicationStages.map((stage) => (
        <span key={stage.id} className={`flex pb-6 items-center  ${selectedFilter.startsWith(stage.stage) ? "text-[#082353]" : "text-[#c3c3c3]"} font-semibold`}>
          <span className={`mr-2 rounded-full w-2.5 h-2 border-2 font-semibold`}></span>
          <p>{stage.stage}</p>
        </span>
      ))}
    </div>

  );
};

export default ApplicationStages;
