// "use client";
// import Container from "@/app/components/Container";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { verificationSteps } from "../../renter-screening/[id]/verify/page";
// import Calendar2 from "@/app/components/Calendar2";
// import { Button, Modal } from "antd";
// import KwabaButton from "@/app/components/KwabaButton";

// const page = () => {
//   const router = useRouter();
//   const [showCalendar, setShowCalendar] = useState(false);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Container>
//       <span
//         onClick={() => router.back()}
//         className="transition duration-300 ease-in-out hover:bg-[#0000000D] cursor-pointer inline-flex items-center rounded-[0.3rem] py-2.5 px-6 mb-2"
//       >
//         <img src="/images/left-arrow.svg" alt="" className="w-4 mr-4" />
//         <span className="text-base font-bold text-[#a8a7a7]">
//           Back to Renter
//         </span>
//       </span>
//       <div className="p-6 rounded-[0.8rem] bg-white text-[#082353]">
//         <div className="block mb-6 text-2xl">
//           <strong>Employee Verification - </strong>{" "}
//           <span> Salary Analysis</span>
//         </div>
//         <div className="flex items-start">
//           <div className="bg-[#f5f5f5] py-4 px-5 text-sm rounded-[0.8rem] w-60 flex flex-col ">
//             {verificationSteps.map((step, index) => (
//               <div key={index} className="flex items-center my-4">
//                 <span
//                   className={`rounded-full w-3 h-3 flex items-center justify-center ${
//                     index <= 1 ? "bg-[#21ad26]" : "bg-[#c3c3c3]"
//                   } mr-2.5`}
//                 >
//                   {index <= 1 && (
//                     <img
//                       src="/images/tick3.svg"
//                       alt=""
//                       className="w-3.5 h-2.5"
//                     />
//                   )}
//                 </span>
//                 <span
//                   className={`${
//                     index <= 1 ? "font-bold" : "font-bold text-[#a7a7a7]"
//                   }`}
//                 >
//                   {step}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="ml-8 flex border-b border-b-gray-200 w-full self-stretch">
//             <div className="w-full">
//               <span className="text-[0.9rem] font-semibold">
//                 <strong>Employer:</strong> ABC Intl Ltd
//               </span>
//               <div className="relative overflow-auto w-232 flex pr-8 pb-8">
//                 <div className="flex flex-col shadow-[.1rem_0_.6rem_.01rem_rgba(0, 0, 0, 0.1)] sticky left-0 pr-4 z-999 bg-white">
//                   <div className="pb-2 text-center mb-4 border-b border-b-gray-200"></div>
//                   <div>Month</div>
//                   <div className="my-2 block relative z-105">
//                     {Array.from({ length: 6 }, (_, i) => {
//                       return (
//                         <div
//                           key={i}
//                           onClick={() => setShowCalendar(!showCalendar)}
//                           className="bg-[#f2f8ff] my-2.5 rounded-[0.2rem] flex items-center justify-between cursor-pointer w-48 border border-[#f2f8ff] pt-2.5 pr-4 pb-2.5 pl-4 transition duration-300 ease-in-out"
//                         >
//                           <div>
//                             {" "}
//                             <span className="font-medium text-[#a7a7a7] text-sm">
//                               Select Month
//                             </span>
//                           </div>
//                           <img
//                             className="w-4"
//                             src="/images/calendar-icon.svg"
//                             alt="active calendar icon"
//                           />
//                           {showCalendar && <Calendar2 />}
//                         </div>
//                       );
//                     })}
//                     <Button className="w-[80%] my-4 mx-auto bg-[#51a4fb] rounded-[0.3rem]">
//                       Add row
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="mx-4">
//                   <div className="text-center text-[#51a4fb] pb-2 border-b border-gray-200 mb-4 h-8 uppercase font-semibold text-[0.9rem]">
//                     Salary
//                   </div>
//                   <div className="flex items-center justify-between border-2 gap-2">
//                     <span className="w-48 text-[0.75rem] flex justify-between items-center">
//                       <strong>Pay date</strong>
//                       <label
//                         htmlFor="allSame"
//                         className="flex gap-1 hover:bg-[#0000000d] py-[0.2rem] px-[0.4rem] rounded-[0.3rem] text-[#0006] cursor-pointer transition duration-300 ease-in-out items-center"
//                       >
//                         <input type="checkbox" />
//                         All same
//                       </label>
//                     </span>
//                     <span className="w-48 text-[0.75rem] flex justify-between items-center">
//                       <strong>Salary amount</strong>
//                       <label
//                         htmlFor="allSame"
//                         className="flex gap-1 hover:bg-[#0000000d] py-[0.2rem] px-[0.4rem] rounded-[0.3rem] text-[#0006] cursor-pointer transition duration-300 ease-in-out items-center"
//                       >
//                         <input type="checkbox" />
//                         All same
//                       </label>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mx-4">
//                   <div className="text-center text-[#51a4fb] pb-2 border-b border-gray-200 mb-4 h-8 uppercase font-semibold text-[0.9rem]">
//                     Salary
//                   </div>
//                   <div className="flex items-center justify-between border-2 gap-2">
//                     <span className="w-48 text-[0.75rem] flex justify-between items-center">
//                       <strong>Pay date</strong>
//                       <label
//                         htmlFor="allSame"
//                         className="flex gap-1 hover:bg-[#0000000d] py-[0.2rem] px-[0.4rem] rounded-[0.3rem] text-[#0006] cursor-pointer transition duration-300 ease-in-out items-center"
//                       >
//                         <input type="checkbox" />
//                         All same
//                       </label>
//                     </span>
//                     <span className="w-48 text-[0.75rem] flex justify-between items-center">
//                       <strong>Salary amount</strong>
//                       <label
//                         htmlFor="allSame"
//                         className="flex gap-1 hover:bg-[#0000000d] py-[0.2rem] px-[0.4rem] rounded-[0.3rem] text-[#0006] cursor-pointer transition duration-300 ease-in-out items-center"
//                       >
//                         <input type="checkbox" />
//                         All same
//                       </label>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex m-6 justify-end">
//           <KwabaButton
//             // onClick={() =>
//             //   router.push(`/renter-screening/${id}/verify/analysis`)
//             // }
//             className="ml-6 cursor-pointer bg-white text-[#000c] rounded-[0.3rem] py-2.5 px-8 border border-[#a7a7a7]"
//           >
//             Back
//           </KwabaButton>
//           <KwabaButton
//             // onClick={() =>
//             //   router.push(`/renter-screening/${id}/verify/analysis`)
//             // }
//             className="ml-6 cursor-pointer bg-[#6419c9] text-white rounded-[0.3rem] py-2.5 px-8 border border-[#51a4fb]"
//           >
//             Confirm
//           </KwabaButton>
//           <Button type="primary" onClick={showModal}>
//             Open Modal
//           </Button>
//           <Modal
//             title="Tell us why you made your decision and any other comments"
//             closable={{ "aria-label": "Custom Close Button" }}
//             open={isModalOpen}
//             onOk={handleOk}
//             centered
//             onCancel={handleCancel}
//             width={853}
//             okText="Approve"
//           >
//             <textarea
//               name=""
//               id=""
//               className="w-full h-40 border border-gray-200"
//             ></textarea>
//           </Modal>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default page;
