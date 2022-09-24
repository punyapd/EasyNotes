import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Submit from "../svg icons/Submit";
import Eye from "../svg icons/Eye";
import Edit from "../svg icons/Edit";
import { useRouter } from "next/router";

type Props = {
  authorData: any;
  authorDataLoading: any;
};

const MyAccount = (props: Props) => {
  const { authorData, authorDataLoading } = props;
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef()

  

  return (
    <div className="author-container">
      <div className="bg-theme p-3 rounded-t-[5px] flex items-center w-full flex-row text-white">
        <div className="hidden w-full md:flex justify-between items-center lg:flex justify-between items-center">
          <div>
            <p> My Account</p>
          </div>
          <div className="flex ml-4">
            <Link href={`MyAccount/EditYourDetail/${authorData?.id}`}>
              <div className="flex cursor-pointer items-center">
                <Edit />

                <span>Edit your details</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="block text-white lg:hidden md:hidden">
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
      {/* <div>heloo</div> */}

      {isOpen && (
        <div className="flex relative items-center justify-center space-x-5 bg-theme flex-col text-white">
          {/* <div></div> */}
          <div>
            <p> My Account</p>
          </div>
          <hr className="w-full mt-4" />
          <Link href="createnoteview">
            <div className="flex mt-4 mb-4 items-center cursor-pointer">
              <Eye />
              <span>Edit Your details</span>
            </div>
          </Link>
        </div>
      )}
      {authorDataLoading ? null : (
        <div className="flex flex-col mt-4 md:flex-row">
          <div className="relative mr-4 text-center">
            <Image
              src="/publisher image.png"
              alt="img"
              width={255}
              height={228}
            />
            
            
          </div>
          <div className=" w-full sm:w-full xl:w-full h-full p-4 dashboard-border font-Inter font-normal text-[#263238]  ">
            <div className="flex border-b-[1px] border-[#E0E0E0] pb-2">
              <p>Full Name</p>
              <p>: {authorData.profile.full_name}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Email</p>
              <p>: {authorData.email ? authorData.email : "N/A"}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Phone</p>
              <p>
                : {authorData.mobile_number ? authorData.mobile_number : "N/A"}
              </p>
            </div>
            <div className=" flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Address</p>
              <p>: {authorData.address ? authorData.address : "N/A"}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Role</p>
              <p>: {"Author"}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Date of Joining</p>
              <p>:{authorData.date_joined ? authorData.date_joined : "N?A"}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Reader</p>
              <p>
                :{" "}
                {authorData.total_enrolled_students
                  ? authorData.total_enrolled_students
                  : "N/A"}
              </p>
            </div>
            <div className="flex pt-2">
              <p>Subscriptions</p>
              <p>
                :{authorData.subscriptions ? authorData.subscriptions : "N?A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
