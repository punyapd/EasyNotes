import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Edit from "../svg icons/Edit";
import Spinner from "../../reusable/loadingspinner/Spinner";
import moment from "moment";

type Props = {
  userProfileData: any;
  userProfileDataLoading: any;
};
const MyAccount = (props: Props) => {
  const { userProfileData, userProfileDataLoading } = props;

  const [isReaderAccountList, setIsReaderAccountList] = useState("");
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <>
      {userProfileDataLoading ? (
        <Spinner />
      ) : (
        <div className="author-container">
          <div className="bg-theme text-white p-3 rounded-t-[5px] flex items-center justify-between w-full flex-row ">
            <div className="hidden md:block">
              <p> My Account</p>
            </div>
            <div className="md:flex ml-4 hidden  cursor-pointer">
              <div className="flex items-center">
                <Link href={"MyAccount/Editdetail"}>
                  <div className="flex items-center gap-2">
                    <Edit />
                    <span>Edit Your details</span>
                  </div>
                </Link>
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
                <p>My Account</p>
              </div>
              <hr className="w-full mt-4" />
              <div className="flex items-center mt-4 mb-4">
                <Edit />
                <span>Edit Your details</span>
              </div>
            </div>
          )}
          <div className="flex  space-x-5 justify-center w-full py-3 flex-wrap lg:flex-nowrap">
            <div className="relative">
              <Image
                src="/publisher image.png"
                width={255}
                height={228}
                alt="publisher"
              ></Image>
            </div>
            <div className=" w-full xl:w-full h-full p-4 dashboard-border font-Inter font-normal text-[#263238]  ">
              <div className="flex border-b-[1px] border-[#E0E0E0] pb-2">
                <p>Full Name</p>
                <p>: {userProfileData?.full_name ? userProfileData?.full_name : 'N/A'}</p>
              </div>
              <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
                <p>Email</p>
                <p>: {userProfileData?.user?.email}</p>
              </div>
              <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
                <p>Phone</p>
                <p>: {userProfileData?.user?.mobile_number ? userProfileData?.user?.mobile_number : 'N/A'}</p>
              </div>
              <div className=" flex border-b-[1px] border-[#E0E0E0] py-2">
                <p>Address</p>
                <p>: {userProfileData?.address ? userProfileData?.address : 'N/A'}</p>
              </div>
              <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
                <p>Role</p>
                <p>
                  : {userProfileData?.is_note_student ? "Reader" : "Teacher"}
                </p>
              </div>
              <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
                <p>Date of Joining</p>
                <p>: {moment(userProfileData?.user?.date_joined).format("DD-MM-YYYY")}</p>
              </div>
              <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
                <p>Readings</p>
                <p>: </p>
              </div>
              <div className="flex pt-2">
                <p>Subscriptions</p>
                <p>: Mr John Deo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MyAccount;
