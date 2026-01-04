// "use client";
// import Container from "@/app/components/Container";
// import { useGlobalContext } from "@/app/GlobalContext";
// import Link from "next/link";
// import { contactInfo, paymentStructureData } from "@/app/components/constants";
// import Button from "@/app/components/Button";
// import ApplicationStages from "@/app/components/ApplicationStages";
// import ApplicationsDetails from "@/app/components/ApplicationsDetails";
// import { useParams } from "next/navigation";

// type Props = { params: { id: string } };

// export default function ApplicationDetail({ params }: Props) {
//   const { rows, displayedRows } = useGlobalContext();
//   const { id } = useParams<{ id: string }>(); 

//   return (
//     <Container>
//       <div className="flex justify-between">
//         <div className="w-[78%]">
//           <span className="transition duration-300 ease-in-out hover:bg-[#0000000D] cursor-pointer inline-flex items-center rounded-[0.3rem] py-2.5 px-6 mb-2">
//             <img src="/images/left-arrow.svg" alt="" className="w-4 mr-4" />
//             <span className="text-base font-bold text-[#a8a7a7]">
//               Back to Applications
//             </span>
//           </span>
//           <div className="py-8 px-6 rounded-xl text-[#082353] bg-white">
//             <div className="flex justify-between p-6 bg-[#f2f8ff] rounded-xl">
//               <div className="flex items-center">
//                 <div className="flex justify-between items-center">
//                   <span className="text-white mr-6 text-7xl rounded-[0.8rem] bg-[#69c0ff] pt-4 w-32 h-32 text-center">
//                     J
//                   </span>
//                 </div>
//                 <div className="flex flex-col font-medium">
//                   <strong className="text-[1.4rem] font-bold">
//                     Precious Balogun
//                   </strong>
//                   {contactInfo.slice(0, 3).map((contact, index) => {
//                     return (
//                       <Link
//                         key={index}
//                         href={contact.link}
//                         target="_blank"
//                         className="flex items-center text-[#585858] mt-[0.3rem]"
//                       >
//                         <img
//                           src={contact.image}
//                           className="w-4 mr-2.5"
//                           alt="email icon"
//                         />
//                         <span className="text-sm">{contact.text}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="flex flex-col ml-4">
//                 <div className="flex items-center">
//                   {contactInfo.slice(3).map((contact, index) => {
//                     return (
//                       <Link
//                         key={index}
//                         href={contact.link}
//                         className={`flex items-center mr-4 text-[0.8rem] hover:shadow-[0_0_1rem_rgba(0,0,0,0.1)]  ${
//                           contact.text === "Whatsapp"
//                             ? "bg-[#4caf50] text-white"
//                             : "bg-[#e3f1ff] text-[#51a4fb]"
//                         } font-medium py-2.5 px-4 rounded-[0.3rem] transition duration-300 ease-out`}
//                       >
//                         <img
//                           src={contact.image}
//                           className="w-4 mr-2.5"
//                           alt="send email icon"
//                         />
//                         <span className="text-sm">{contact.text}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//                 <div className="flex mt-4">
//                   <span className="flex flex-col mr-4">
//                     <span className="text-[#a7a7a7] text-[0.7rem]">
//                       EMPLOYMENT STATUS
//                     </span>
//                     <p className="font-medium text-[#082353]">Employed</p>
//                   </span>
//                   <span className="flex flex-col mr-4">
//                     <span className="text-[#a7a7a7] text-[0.7rem]">SALARY</span>
//                     <p className="font-medium text-[#082353]">₦400,000</p>
//                   </span>
//                   <span className="flex flex-col mr-4">
//                     <span className="text-[#a7a7a7] text-[0.7rem]">
//                       ACCOMMODATION STATUS
//                     </span>
//                     <p className="font-medium text-[#082353]">RENT</p>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between mt-8">
//               <div className="flex justify-between">
//                 <div className="flex flex-col px-8">
//                   <p className="text-[0.875rem]">Requested amount</p>
//                   <p className="text-[#51a4fb] text-xl font-bold">₦1,200,000</p>
//                   {paymentStructureData.slice(0, 3).map((payment, index) => {
//                     return (
//                       <div
//                         key={index}
//                         className="flex justify-between  items-center py-2.5 px-0 border-b-[0.063rem] border-b-gray-200"
//                       >
//                         <span className="text-[#c3c3c3] text-[0.75rem] mr-8">
//                           {payment.title}
//                         </span>
//                         {!payment.duration ? (
//                           <span className="text-[0.9rem] font-medium">
//                             {payment.amount}
//                           </span>
//                         ) : (
//                           <span className="text-[0.9rem] font-medium">
//                             {payment.duration}
//                           </span>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="w-[0.2rem] bg-[#0000000d]"></div>
//                 <div className="flex flex-col px-8">
//                   <p className="text-[0.875rem]">Requested amount</p>
//                   <p className="text-[#20c578] text-xl font-bold">₦850,000</p>
//                   {paymentStructureData.slice(2).map((payment, index) => {
//                     return (
//                       <div
//                         key={index}
//                         className="flex justify-between items-center py-2.5 px-0 border-b-[0.063rem] border-b-gray-200"
//                       >
//                         <span className="text-[#c3c3c3] text-[0.75rem] mr-8">
//                           {payment.title}
//                         </span>
//                         {!payment.duration ? (
//                           <span className="text-[0.9rem] font-medium">
//                             {payment.amount}
//                           </span>
//                         ) : (
//                           <span className="text-[0.9rem] font-medium">
//                             {payment.duration}
//                           </span>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="flex items-end">
//                 {" "}
//                 <Button
//                   htmlType="button"
//                   className="bg-[#d9ffde] text-[#20c578]"
//                 >
//                   <img
//                     src="/images/tick.svg"
//                     className="w-4"
//                     alt="qualify tick"
//                   />
//                   Qualify
//                 </Button>
//                 <Button
//                   htmlType="button"
//                   className="bg-[#ffe8e8] text-[#fa4444]"
//                 >
//                   <img
//                     src="/images/decline-application-icon.svg"
//                     className="w-4"
//                     alt="decline application icon"
//                   />
//                   Decline
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <ApplicationsDetails />
//         </div>
//         <div className="flex flex-col bg-white rounded-[0.8rem] p-6 w-[20%]">
//           <h2 className="text-[#696969] font-bold text-sm">
//             APPLICATION STAGES
//           </h2>
//           <div className="border-b-[0.063rem] mt-2 mb-6 border-b-gray-200"></div>
//           <ApplicationStages />
//         </div>
//       </div>
   
//     </Container>
//   );
// }

import ApplicantDetails from '@/app/components/ApplicantDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      <ApplicantDetails backLinkLabel='Applications'/>
      {/* <ApplicantDetails backLinkLabel='Renter screening'/>
      <ApplicantDetails backLinkLabel='Transactions'/> */}
    </div>
  )
}

export default page
