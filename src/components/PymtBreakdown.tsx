import { useState } from "react";
import { cn } from "@sglara/cn";

type Amount =
  | "totalNumberOfActivePayments"
  | "totalValueOfActivePayments"
  | "totalNumberOfDefaults"
  | "totalValueOfDefaultingPayments"
  | "totalValueOfCompletedPayments"
  | "totalNumberOfApplications"
  | "totalValueOfApplications"
  | "totalNumberOfRentDisbursed"
  | "monthlyRentDisbursed"
  | number;

interface BreakdownProps {
  amount: Amount;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

const PymtBreakdown = ({
  amount,
  subtitle,
  className = "",
}: BreakdownProps) => {
  const breakdownClasses = {
    amountStyle: "font-bold text-[#082353] text-[0.855rem]",
    subtitleStyle: "",
  };

  const formatCurrency = (value: number) => {
    return `₦${value.toLocaleString("en-NG")}`;
  };

  const [monthlyMetrics] = useState<number>(() => {
    if (typeof amount === "number") return amount;

    if (amount === "totalNumberOfActivePayments")
      return Math.floor(Math.random() * 30) + 20;
    if (amount === "totalValueOfActivePayments") {
      return Math.floor(Math.random() * 10000000) + 1000000;
    }
    if (amount === "totalNumberOfDefaults")
      return Math.floor(Math.random() * 20);
    if (amount === "totalValueOfDefaultingPayments")
      return Math.floor(Math.random() * 5000000) + 500;
    if (amount === "totalValueOfCompletedPayments")
      return Math.floor(Math.random() * 5000000) + 1000000;
    if (amount === "totalNumberOfApplications")
      return Math.floor(Math.random() * 26) + 50;
    if (amount === "totalValueOfApplications")
      return Math.floor(Math.random() * 5000000) + 10000000;
    if (amount === "totalNumberOfRentDisbursed")
      return Math.floor(Math.random() * 50);
    if (amount === "monthlyRentDisbursed")
      return Math.floor(Math.random() * 900000) + 5000000;
    return amount;
  });

  return (
    <div className={className}>
      <p className={cn(breakdownClasses.amountStyle)}>{monthlyMetrics}</p>
      <p className="text-[0.665rem]">{subtitle}</p>
    </div>
  );
};

export default PymtBreakdown;
