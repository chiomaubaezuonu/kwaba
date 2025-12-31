"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface NavProp {
  image: string;
  text: string;
}
const navData = [
  {
    image: "/images/dashboard-icon.svg",
    text: "Dashboard",
    link: "/",
  },
  {
    image: "/images/applications-icon.svg",
    text: "Applications",
    link: "/applications",
  },
  {
    image: "/images/renter-check-icon.svg",
    text: "Renter Screening",
    link: "/renter-screening",
  },
  {
    image: "/images/payment-icon.svg",
    text: "Transactions",
    link: "/transactions",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <div className="flex py-4 px-12 justify-between">
        <div className="flex gap-7.5 justify-center items-center">
          <img src="/images/SOMOS.png" alt="somos-logo" className="w-30" />
          <div className="flex items-center gap-2 bg-[#ebf2f3] rounded-[0.3rem] pl-3">
            <img src="/images/search.svg" alt="search-icon" className="w-4" />
            <input
              type="text"
              placeholder="Search"
              className="py-[0.4rem] px-1.5 outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center">
          <img src="/images/bell.svg" alt="bell" className="w-3" />
          <span>
            <span className="mr-4 ml-8">
              Hi,<strong className="text-[#082353]">James</strong>
            </span>
            <span className="py-[0.3rem] px-[0.8rem] text-[#1564db] font-bold rounded-lg bg-[#EBF2F3]">
              J
            </span>
          </span>
        </div>
      </div>
      <nav className="bg-[#082353] flex flex-wrap items-center py-6 px-12">
        {navData.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.link}
            className={`flex items-center ${
              pathname === navItem.link ? "bg-[#e1f5f8] text-black" : "text-white"
            }  py-[0.2rem] hover:bg-[#c8c8c833] px-4 rounded-2xl duration-40 ease-out mx-2.5 cursor-pointer`}
          >
            <img src={navItem.image} alt="" className="mr-1.5 w-5.5" />
            {navItem.text}
          </Link>
        ))}
        {/* <Link href="#" className="flex">
          <img
            src="/images/dashboard-icon.svg"
            alt="dashboard-icon"
            className="mr-[1.3rem] bg-[#e1f5f8]"
          />
          Dashboard
        </Link> */}
        <Link href="/table" className="text-white cursor-pointer">table</Link>
      </nav>
    </div>
  );
};

export default Header;
// #a8a7a7
