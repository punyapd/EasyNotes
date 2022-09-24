import React from "react";

export default function Transition() {
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter font-medium">
      <div className="flex items-start justify-between mx-5">
        <p className="text-[18px]">Transitions</p>
        <div className="h-[40px] w-[210px] flex items-center justify-between border-[1px] border-[#CCCCCC] rounded-lg px-3">
          <input
            type="text"
            placeholder="search author"
            className=" w-32 outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6  w-6 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
