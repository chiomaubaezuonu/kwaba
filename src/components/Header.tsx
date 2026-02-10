import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
interface NavProp {
  image: string;
  text: string;
}
const navData = [
  {
    image: "/images/dashboard-icon.svg",
    text: "Dashboard",
    link: "/",
    className: "mr-1.5 w-5",
  },
  {
    image: "/images/applications-icon.svg",
    text: "Applications",
    link: "/applications",
    className: "mr-1.5 w-3.5",
  },
  {
    image: "/images/renter-check-icon.svg",
    text: "Renter Screening",
    link: "/renter-screening",
    className: "mr-1.5 w-4.5",
  },
  {
    image: "/images/payment-icon.svg",
    text: "Transactions",
    link: "/transactions",
    className: "mr-1.5 w-6",
  },
];

const Header = () => {
  const [isNavLinksOpen, setIsNavLinksOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const toggleNavLinks = () => {
    setIsNavLinksOpen(!isNavLinksOpen);
  };

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex flex-col">
      <div className="flex py-4 px-12 justify-between bg-white">
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
          <img src="/images/bell.svg" alt="bell" className="w-4 md:w-3" />
          <span className="flex items-center">
            <span className="mr-4 ml-8 hidden md:block">
              Hi,<strong className="text-[#082353]">James</strong>
            </span>
            <span className="py-[0.3rem] px-[0.8rem] text-[#1564db] font-bold rounded-lg bg-[#EBF2F3]">
              J
            </span>
          </span>
        </div>
      </div>
      <nav className="bg-[#082353] relative flex flex-wrap items-center py-6 px-6 md:px-12">
        {!isNavLinksOpen ? (
          <img
            src="/images/menu.svg"
            alt="menu icon"
            onClick={toggleNavLinks}
            className="md:hidden w-6 cursor-pointer"
          />
        ) : (
          <img
            src="/images/close.svg"
            alt="close icon"
            onClick={toggleNavLinks}
            className="md:hidden w-6 cursor-pointer"
          />
        )}
        {navData.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.link}
            className={`hidden md:flex items-center ${
              pathname === navItem.link
                ? "bg-[#e1f5f8] text-black"
                : "text-white"
            }  py-[0.2rem] hover:bg-[#c8c8c833] px-4 rounded-2xl duration-40 ease-out mx-2.5 cursor-pointer`}
          >
            <img src={navItem.image} alt="" className={navItem.className} />
            {navItem.text}
          </Link>
        ))}
        {isNavLinksOpen && (
          <div className="md:hidden transition duration-300 ease-in-out bg-[#082353] absolute w-full top-17 left-0">
            {navData.map((navItem, index) => (
              <Link
                key={index}
                to={navItem.link}
                className={`flex items-center ${
                  pathname === navItem.link
                    ? "bg-[#e1f5f8] text-black"
                    : "text-white"
                }  py-[0.2rem] mb-4 hover:bg-[#c8c8c833] px-4 rounded-2xl duration-40 ease-out mx-2.5 cursor-pointer`}
              >
                <img src={navItem.image} alt="" className="mr-1.5 w-5.5" />
                {navItem.text}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
// #a8a7a7
