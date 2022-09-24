import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { type } from "os";
import { useState } from "react";


type Props = {

}

const notices = [
  "You have register a note, now you view and read it.",
  "You have register a note, now you view and read it.",
  "You have register a note, now you view and read it.",
];


const Notification = (props:Props) => {

  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div onClick={(e) => setIsActive(!isActive)
      } className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
      {isActive && (
        <div className=" absolute top-16 right-8 flex flex-col border-[1px] shadow-2xl rounded w-[254px] p-5 space-y-4 bg-white z-50 font-Inter text-[15px] font-normal text-themetext">
          {notices.map((notice: any, index: number) => (
            <div key={index}>
              <p>{notice}</p>
              <div className="flex items-center space-x-1 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[10px] font-Inter font-normal">
                  1 Day ago
                </span>
              </div>
              <hr className="mt-3" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Notification;
