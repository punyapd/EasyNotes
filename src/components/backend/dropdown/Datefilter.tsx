import { Menu } from "@headlessui/react";
import React from "react";

const day = ["Today", "Yesterday", "This month", "This year"];

type Props = {};

function Datefilter() {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button as={React.Fragment}>
          <div className="w-[156px] p-1 h-[38px] flex items-center justify-between px-3 border-[#F5F5F5] border-[2px] rounded-lg  mb-2 ">
            <button>
              <span className=" text-[15px] font-normal font-Inter">
                By Date
              </span>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }: any) => (
              <div className="z-30  bg-white absolute top-[38px] left-0 p-4 border-[#F5F5F5] rounded-lg border-[1px] w-[16rem] items-center justify-center space-y-3 drop-shadow-xl">
                <div className=" flex items-center justify-around ">
                  <div className="border-[1px] rounded-lg">start date</div>
                  <p className="font-Inter text-[15px] font-medium">To</p>
                  <div className="border-[1px] rounded-lg">end date</div>
                </div>
                {day.map((item: any, index:any) => (
                  <div key={index} className="bg-theme rounded-lg flex justify-center items-center h-8 ">
                    <p className="text-white font-Inter font-medium text-[15px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Menu.Item>
          {/* ... */}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default Datefilter;
