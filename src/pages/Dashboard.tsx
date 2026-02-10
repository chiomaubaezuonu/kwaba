import Breakdown from "../components/PymtBreakdown";
import ProgressPie from "../components/ProgressPie";
import Lenders from "../components/Lenders";
import SimpleBarChart from "../components/barChart2";
import DropDown from "../components/DropDown";
import PymtBreakdown from "../components/PymtBreakdown";

export default function Dashboard() {

  return (
    <div className="bg-[#eaf0f1] p-[2.85rem]">
      <div className="gap-8 grid grid-cols-[2fr_2.9fr] text-[#082353]">
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
              <DropDown />
            </div>
            <div className="flex justify-between my-4">
              {/* <div>
              <p className="font-bold text-[#082353] text-[0.9rem]">32</p>
              <p>Total number of active payments</p>
            </div> */}
              <PymtBreakdown
                amount={"monthlyActivePaymentNumber"}
                subtitle="Total number of active payments"
              />
              <PymtBreakdown
                amount={"#6,220,000"}
                subtitle="Total value of active payments"
              />
              <PymtBreakdown
                amount={"#6,220,000"}
                subtitle="Monthly active payments"
              />
            </div>
            <span className="flex items-center">
              <span className="rounded-[40%] bg-[#fab83d] w-2 h-2 mr-2"></span>
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Defaults
              </span>
            </span>
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <Breakdown
                  className="py-4"
                  amount={10}
                  subtitle="Total number of defaults"
                />

                <Breakdown
                  className="py-4"
                  amount={"₦2,160,000"}
                  subtitle="Total number of defaulting payments"
                />
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
              <Breakdown
                amount={"3,66,0000"}
                subtitle="Total value of defaulting payments"
                className="flex flex-col-reverse gap-4"
              />
            </div>
            <div className="bg-[#31ABDB] p-5.5 w-[31%] rounded-lg flex flex-col justify-between gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="bg-white fill-current w-12 text-[#31ABDB] rounded-[.3rem] py-1.5 px-1.5"
              >
                <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
              </svg>
              <Breakdown
                amount={"3,66,0000"}
                subtitle="Total value of active payments"
                className="flex flex-col-reverse gap-4"
              />
            </div>
            <div className="bg-[#5A5AF4] p-5.5 w-[31%] rounded-lg flex flex-col justify-between gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="bg-white fill-current w-12 text-[#5A5AF4] rounded-[.3rem] py-1.5 px-1.5"
              >
                <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
              </svg>
              <Breakdown
                amount={"3,66,0000"}
                subtitle="Total value of completed payments"
                className="flex flex-col-reverse gap-4"
              />
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
              <select>
                <option value="">Month</option>
                <option value="">Year</option>
              </select>
            </div>
            <div className="flex flex-col p-6">
              <div className="flex justify-between bg-[#ebf2f3] p-8 rounded-[0.8rem]">
                <Breakdown
                  amount={32}
                  subtitle="Total number of active payments"
                />
                <Breakdown
                  amount={"#6,220,000"}
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
                <SimpleBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 gap-8 grid grid-cols-[2.9fr_2fr] text-[#082353]">
        {/* left */}
        <div className="flex flex-col bg-white rounded-2xl">
          <div className="flex flex-col pt-6 px-8 rounded-2xl bg-[#5a5af4]">
            <div className="flex justify-between">
              <span className="text-[1.3rem] text-[#082353] font-bold">
                Applications
              </span>

              <select>
                <option value="">Month</option>
                <option value="">Year</option>
              </select>
            </div>
            <div className="mt-8 flex justify-between items-center text-white">
              <Breakdown
                className="py-4"
                amount={59}
                subtitle="Total number of applications"
              />

              <Breakdown
                className="py-4"
                amount={"₦11,369,000"}
                subtitle="Total value of applications"
              />
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
              <Breakdown
                amount={35}
                subtitle="Total number of rent disbursed"
              />
              <Breakdown
                amount={"#6,660,000"}
                subtitle="Total value of rent disbursed"
              />
              <Breakdown
                amount={"#6,220,000"}
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
                    amount={13}
                    subtitle="Total number of rejected applications"
                  />
                  <Breakdown
                    amount={"₦2,491,000"}
                    subtitle="Total value of rejected applications"
                  />
                </div>
                <img src="/images/cards-icon.PNG" className="w-32" alt="" />
              </div>
              <ProgressPie />
            </div>
          </div>
        </div>
        {/* right */}
        <Lenders />
      </div>
    </div>
  );
}
