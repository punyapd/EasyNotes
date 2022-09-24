import React from "react";

export default function Categories() {
  return (
    <div className=" w-full md:w-auto lg:h-96 xl:w-[350px] grid grid-rows-6 border-x-[1px] border-b-[1px]  border-[#E0E0E0] rounded-b-md ">
      <div className="bg-theme rounded-t-md p-2 md:p-4 lg:p-6 text-md font-medium text-white">
        <p className=" ">Exam Categories</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Science</p>
        <p>05</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Mathematics</p>
        <p>01</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Computer</p>
        <p>10</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Question Pattern</p>
        <p>12</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Status</p>
        <p>04</p>
      </div>
    </div>
  );
}
