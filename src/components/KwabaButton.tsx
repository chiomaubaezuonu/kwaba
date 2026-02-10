import React, { ReactNode } from "react";
import { cn } from "@sglara/cn";

type ButtonType = "primary" | "transparent";
interface ButtonProps {
  children?: ReactNode;
  image?: string;
  className?: string;
  htmlType?: "button" | "submit";
  onClick?: (e: any) => void;
}
export const buttonData = [
  {
    text: "Decline",
    image: "/images/decline-icon.svg",
    className: "bg-[#F4F4F4] text-[#767676]",
  },
  {
    text: "Assign",
    image: "/images/assign-icon.svg",
    className: "bg-[#26dbc9]",
  },
  {
    text: "Export",
    image: "/images/export-icon.svg",
    className: "bg-[#09a0e6]",
  },
];

const KwabaButton = ({
  className = "",
  children,
  image,
  htmlType,
  onClick,
}: ButtonProps) => {
  return (
    <div className="flex">
      <button
        type={htmlType}
        onClick={onClick}
        className={cn(
          "flex rounded-[0.3rem] ml-4 text-sm py-3 px-6 gap-2 text-white",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default KwabaButton;
