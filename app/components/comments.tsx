import React from "react";
import KwabaButton from "./KwabaButton";

const Comments = () => {
  return (
    <div className="px-4 mt-8 min-h-32 text-[0.85rem]">
      <textarea
        name=""
        className="w-full border h-40 border-gray-200 rounded-[0.3rem] p-2 text-base"
        id=""
      ></textarea>
      <KwabaButton className="py-2.5 px-5 flex items-center transition-all duration-300 ease-out bg-[#51a4fb] mt-2 ml-0 rounded-[0.3rem]">
        <img
          src="/images/comments.svg"
          className="w-4"
          alt="add comments icon"
        />
        Add comment
      </KwabaButton>
      <div className="flex flex-col p-2">
        <div className="flex flex-col bg-[#f5f5f5] rounded-sm my-2 p-4">
          <p className="mb-2 text-[#212529] font-medium text-sm">
            Any updates on the renter's referee?
          </p>
          <span className="flex items-center">
            <span className="text-[#a7a7a7] text-[0.713rem]">
              By Amaka Kingsley
            </span>
            <span className="rounded-full p-[0.2rem] bg-[#a7a7a7] mx-2.5"></span>
            <span className="text-[#a7a7a7] text-[0.713rem]">
              Mon, 12 Jan, 2026 / 02:56 PM
            </span>
          </span>
        </div>
        <div className="flex flex-col bg-[#f5f5f5] rounded-sm my-2 p-4">
          <p className="mb-2 text-[#212529] font-medium text-sm">
            This renter's documents are not complete, request for them today
          </p>
          <span className="flex items-center">
            <span className="text-[#a7a7a7] text-[0.713rem]">
              By Jude Effiong
            </span>
            <span className="rounded-full p-[0.2rem] bg-[#a7a7a7] mx-2.5"></span>
            <span className="text-[#a7a7a7] text-[0.713rem]">
              Sun, 11 Jan, 2026 / 11:56 AM
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
