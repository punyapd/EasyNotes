import Link from "next/link";
import React, { useState } from "react";
import Eye from "../../backend/svg icons/Eye";
import Submit from "../../backend/svg icons/Submit";

type Props = {};

const NavbarReuse = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-theme p-3 rounded-t-[5px] flex items-center w-full flex-row ">
        <div className="hidden md:flex justify-between items-center lg:flex justify-between items-center">
          <div>
            <p> Create your note</p>
          </div>
          <div className="flex ml-4">
            <Link href="createnoteview">
              <div className="flex cursor-pointer items-center">
                <Eye />
                <span>View Note</span>
              </div>
            </Link>
            <div className="flex items-center ml-4">
              <Submit />
              <span>Submit</span>
            </div>
          </div>
        </div>

        <div className="block lg:hidden md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 xs:h-10 xs:w-10"
            onClick={() => setIsOpen(!isOpen)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="flex relative items-center justify-center space-x-5 bg-theme flex-col">
          {/* <div></div> */}
          <div>
            <p> Create your note</p>
          </div>
          <hr className="w-full mt-4" />

          <Link href="createnoteview">
            <div className="flex mt-4 items-center">
              <Eye />
              <span>View Note</span>
            </div>
          </Link>
          <hr className="w-full mt-4" />
          <div className="flex items-center mt-4 mb-4">
            <Submit />
            <span>Submit</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarReuse;
