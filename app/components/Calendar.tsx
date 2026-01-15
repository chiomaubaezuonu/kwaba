import React from "react";
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  return (
    <div className="h-56 overflow-auto top-[106%] absolute flex flex-col transition duration-200 ease-in-out shadow-2xl">
      {months.map((month, index) => (
        <div key={index} className="p-2.5 bg-[#f2f8ff] hover:bg-[#87cfeb33]">
          Select Month
          {month}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
