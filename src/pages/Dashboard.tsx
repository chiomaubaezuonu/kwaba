import Breakdown from "../components/PymtBreakdown";
import ProgressPie from "../components/ProgressPie";
import Lenders from "../components/Lenders";
import SimpleBarChart from "../components/barChart2";
import DropDown from "../components/DropDown";
import PymtBreakdown from "../components/PymtBreakdown";
import BarChart from "../components/barChart2";
import {
  monthlyActivePayments,
  monthlyDefaultingPayments,
} from "@/components/constants";

// const disbursedValue = Math.floor(Math.random() * 40) + 30;
const numOfDisbursedRent = Math.floor(Math.random() * 20) + 30;
// const rejectedValue = Math.floor(Math.random() * 40) + 10;
const numOfrejectedApplications = Math.floor(Math.random() * 26) + 5;
const pendingValue = 100 - (numOfDisbursedRent + numOfrejectedApplications); // Remainder
const totalDefaults = Math.floor(Math.random() * 40) + 10;
const totalApplications =
  numOfDisbursedRent + numOfrejectedApplications + pendingValue; //Math.floor(Math.random() * 26) + 50;
const totalValueOfApplications =
  Math.floor(Math.random() * 15000000) + 10000000;

console.log(
  "disbursed:",
  numOfDisbursedRent,
  "rejected:",
  numOfrejectedApplications,
  pendingValue,
);

export default function Dashboard() {
  return (
    <div className="bg-[#eaf0f1] p-[2.85rem]">
      <div className="gap-8 grid grid-cols-[1.8fr_2.2fr] text-[#082353]">
        {/* left */}
        <div className="flex flex-col">
          <div className="bg-white py-4 px-5.5 rounded-[0.8rem]">
            <div className="flex justify-between">
              <span className="flex items-center">
                <span className="rounded-[40%] bg-[#31abdb] w-2 h-2 mr-2"></span>
                <span className="text-[1.3rem] text-[#082353] font-bold">
                  Active Payments
                </span>
              </span>
              <DropDown defaultValue="Month" />
            </div>
            <div className="flex justify-between my-4">
              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  {monthlyActivePayments.numberOfActivePayments}
                </p>
                <p className="text-xs">Total number of active payments</p>
              </div>
              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  ₦
                  {monthlyActivePayments.valueOfActivePayments.toLocaleString(
                    "en-NG",
                  )}
                </p>
                <p className="text-xs">Total value of active payments</p>
              </div>
              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  ₦
                  {monthlyActivePayments.valueOfActivePayments.toLocaleString(
                    "en-NG",
                  )}
                </p>
                <p className="text-xs">Monthly active payments</p>
              </div>
            </div>
            <span className="flex items-center">
              <span className="rounded-[40%] bg-[#fab83d] w-2 h-2 mr-2"></span>
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Defaults
              </span>
            </span>
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                {/* <Breakdown
                  className="py-4"
                  amount={"totalNumberOfDefaults"}
                  subtitle="Total number of defaultsmememem"
                /> */}
                <div>
                  <p className="font-bold text-[#082353] text-[0.855rem]">
                    {monthlyActivePayments.numberOfDefaultPayments.toLocaleString(
                      "en-NG",
                    )}
                  </p>
                  <p className="text-xs">Total number of defaults</p>
                </div>
                <div>
                  <p className="font-bold text-[#082353] text-[0.855rem]">
                    {monthlyDefaultingPayments.toLocaleString("en-NG")}
                  </p>
                  <p className="text-xs">Total number of defaulting payments</p>
                </div>
                {/* 
                <Breakdown
                  className="py-4"
                  amount={"totalValueOfDefaultingPayments"}
                  subtitle="Total number of defaulting payments"
                /> */}
                <img src="/images/applications-icon-svg" alt="app" />
              </div>
              <ProgressPie />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="bg-[#fab83d] p-5.5 w-[31%] rounded-lg flex flex-col justify-between gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="bg-white fill-current w-12 text-[#fab83d] rounded-[.3rem] py-1.5 px-1.5"
              >
                <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
              </svg>
              {/* <Breakdown
                amount={"totalValueOfDefaultingPayments"}
                subtitle="Total value of defaulting payments"
                className="flex flex-col-reverse gap-4"
              /> */}
              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  {monthlyDefaultingPayments.toLocaleString("en-NG")}
                </p>
                <p className="text-xs">Total value of defaulting payments</p>
              </div>
            </div>
            <div className="bg-[#31ABDB] p-5.5 w-[31%] rounded-lg flex flex-col justify-between gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="bg-white fill-current w-12 text-[#31ABDB] rounded-[.3rem] py-1.5 px-1.5"
              >
                <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
              </svg>
              {/* <Breakdown
                amount={"totalValueOfActivePayments"}
                subtitle="Total value of active payments"
                className="flex flex-col-reverse gap-4"
              /> */}
              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  {monthlyActivePayments.valueOfActivePayments.toLocaleString(
                    "en-NG",
                  )}
                </p>
                <p className="text-xs">Total value of active payments</p>
              </div>
            </div>
            <div className="bg-[#5A5AF4] p-5.5 w-[31%] rounded-lg flex flex-col justify-between gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="bg-white fill-current w-12 text-[#5A5AF4] rounded-[.3rem] py-1.5 px-1.5"
              >
                <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
              </svg>
              {/* <Breakdown
                amount={"totalValueOfDefaultingPayments"}
                subtitle="Total value of completed payments"
                className="flex flex-col-reverse gap-4"
              /> */}
              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  {monthlyActivePayments.valueOfActivePayments.toLocaleString(
                    "en-NG",
                  )}
                </p>
                <p className="text-xs">Total value of active payments</p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col">
          <div className="bg-white rounded-[0.8rem]">
            <div className="flex justify-between py-4 px-8 border-b-[0.063rem] border-gray-200">
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Completed Payments
              </span>
              <DropDown defaultValue="Year" />
            </div>
            <div className="flex flex-col p-6">
              <div className="flex justify-between bg-[#ebf2f3] p-8 rounded-[0.8rem]">
                <Breakdown
                  amount={"totalNumberOfActivePayments"}
                  subtitle="Total number of active payments"
                />
                <Breakdown
                  amount={"totalValueOfCompletedPayments"}
                  subtitle="Total number of active payments"
                />
                <img
                  src="/images/cards-icon.PNG"
                  alt="cards-icon"
                  className="w-24 #ebf2f3"
                />
              </div>
              <div className="flex flex-col">
                {/* <SimpleBarChart /> */}
                <BarChart generateRandomData={true} monthsToShow={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 gap-8 grid grid-cols-[2.9fr_2fr] text-[#082353]">
        {/* left */}
        <div className="flex flex-col bg-white rounded-2xl">
          <div className="flex flex-col pt-6 px-8 rounded-2xl bg-[#5a5af4] text-5xl">
            <div className="flex justify-between">
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Applications
              </span>
              <DropDown defaultValue="Month" />
            </div>
            <div className="mt-8 flex justify-between items-center text-white">
              {/* <Breakdown
                className="py-4"
                amount={"totalNumberOfApplications"}
                subtitle="Total number of applications"
              /> */}
              <span>
                <strong>{totalApplications}</strong>
                <span className="block text-base w-[80%]">
                  Total number of applications
                </span>
              </span>

              {/* <Breakdown
                className="py-4"
                amount={"totalValueOfApplications"}
                subtitle="Total value of applications"
              /> */}
              <span>
                <strong className="text-[1.875rem]">
                  {totalValueOfApplications}
                </strong>
                <span className="block text-base w-[80%]">
                  Total value of applications
                </span>
              </span>
              <img
                src="/images/applications-image.PNG"
                alt="app"
                className="w-48"
              />
            </div>
          </div>
          <div className="flex flex-col bg-white py-4 px-8">
            <span className="flex items-center">
              <span className="rounded-[40%] bg-[#4cb34c] w-2 h-2 mr-2"></span>
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Disbursed
              </span>
            </span>
            <div className="flex justify-between my-4">
              {/* <Breakdown
                amount={"totalNumberOfRentDisbursed"}
                subtitle="Total number of rent disbursed"
              /> */}

              <div>
                <p className="font-bold text-[#082353] text-[0.855rem]">
                  {numOfDisbursedRent}
                </p>
                <p className="text-xs">Total number of rent disbursed</p>
              </div>

              <Breakdown
                amount={"monthlyRentDisbursed"}
                subtitle="Total value of rent disbursed"
              />
              <Breakdown
                amount={"monthlyRentDisbursed"}
                subtitle="Monthly rent disbursed"
              />
            </div>
            <span className="flex items-center">
              <span className="rounded-[40%] bg-[#EC5252] w-2 h-2 mr-2"></span>
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Rejected
              </span>
            </span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex justify-between gap-4 my-4">
                  <Breakdown
                    amount={totalDefaults}
                    subtitle="Total number of rejected applications"
                  />
                  <Breakdown
                    amount={"totalValueOfApplications"}
                    subtitle="Total value of rejected applications"
                  />
                </div>
                <BarChart
                  generateRandomData={true}
                  monthsToShow={20}
                  barPercentage={0.9}
                  categoryPercentage={0.9}
                  showAxes={false}
                  showLabels={false}
                  showTooltip={false}
                />
              </div>
              <ProgressPie
                description="Disbursed"
                data={[
                  { name: "Disbursed", value: numOfDisbursedRent },
                  { name: "Rejected", value: numOfrejectedApplications },
                  { name: "Pending", value: pendingValue },
                ]}
                colors={["#696969", "#ec5252", "#4cb34c"]}
              />
            </div>
          </div>
        </div>
        {/* right */}
        <Lenders />
      </div>
    </div>
  );
}
