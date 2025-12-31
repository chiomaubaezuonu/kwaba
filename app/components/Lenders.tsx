import React from "react";
type TransactionType = "Value of transactions by" | "No. of transactions by";
interface LenderProps {
  image: string;
  value?: string;
  text: TransactionType;
  company: string;
  numberOfTransactions?: number;
  className?: string;
}
const lenderData: LenderProps[] = [
  {
    image: "/images/amfb-dollar.svg",
    value: "₦1,740,000",
    text: "Value of transactions by",
    company: "AMFB",
    className: "#FF990020",
  },
  {
    image: "/images/amfb-transaction.svg",
    numberOfTransactions: 21,
    text: "No. of transactions by",
    company: "AMFB",
    className: "#FF990020",
  },
  {
    image: "/images/stmfb-dollar.svg",
    value: "₦2,860,000",
    text: "Value of transactions by",
    company: "STMFB",
    className: "#00FF9920",
  },
  {
    image: "/images/stmfb-transaction.svg",
    numberOfTransactions: 24,
    text: "No. of transactions by",
    company: "STMFB",
    className: "#00FF9920",
  },
  {
    image: "/images/kwaba-dollar.svg",
    value: "₦5,260,000",
    text: "Value of transactions by",
    company: "Kwaba",
    className: "#9900FF20",
  },
  {
    image: "/images/kwaba-transaction.svg",
    numberOfTransactions: 22,
    text: "No. of transactions by",
    company: "Kwaba",
    className: "#9900FF20",
  },
];

const Lenders = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-[0.8rem] overflow-hidden">
        <div className="py-4 px-8 border-b-[0.063rem] border-gray-200">
          <span className="text-[1.3rem] text-[#082353] font-bold">
            Lenders
          </span>
        </div>
        <div className="text-center my-4 mx-auto">
          <p className="text-3xl font-bold">3</p>
          <span>Number of lenders</span>
        </div>
        <div className="flex flex-wrap items-center">
          {lenderData.map((data, index) => (
            <div
              key={index}
              className="py-4 px-8 flex items-center justify-center w-1/2 text-[#082353]"
            >
              {data.text === "Value of transactions by" && (
                <div className="flex items-center justify-center">
                  <div
                    className="mr-4 py-3.5 px-4 rounded-xl items-center"
                    style={{ backgroundColor: data.className }}
                  >
                    <img
                      src={data.image}
                      className="w-5 h-5"
                      alt="dollar image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg">{data.value}</p>
                    <p className="text-[0.7rem]">{data.text}</p>
                    <p className="font-bold text-[0.7rem]">{data.company}</p>
                  </div>
                </div>
              )}

              {data.text === "No. of transactions by" && (
                <div className="flex items-center">
                  <div
                    className="mr-4 py-3.5 px-4 rounded-xl items-center"
                    style={{ backgroundColor: data.className }}
                  >
                    <img
                      src={data.image}
                      className="w-6"
                      alt="transaction icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>{data.numberOfTransactions}</p>
                    <p className="text-[0.7rem]">{data.text}</p>
                    <p className="font-bold text-[0.7rem]">{data.company}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <img src="/images/line-graph-image.png" alt="line-graph" />
      </div>
    </div>
  );
};

export default Lenders;
