import React from "react";
import Link from "next/link";
import Cards from "../../frontend/main/Cards";
import Image from "next/image";
import moment from "moment";

type Props = {
  noteDetailData: any;
};
const Details = (props: Props) => {
  const { noteDetailData } = props;
  return (
    <div className="p-4 h-[662px] w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto ">
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
        <div className="flex items-center">
          <Link href="Authors">
            <h2 className="text-[#F0F0F0]">Authors </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <Link href="Notedetails">
            <span>Authoro details</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 my-6">
        <div>
          <div className="relative h-[228px] w-[255px]">
            <Image src="/publisher image.png" alt="publishers" layout="fill" />
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-5 font-normal  col-span-3 ">
          <div>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Mr. John Deo"
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              value={noteDetailData.profile?.full_name || "N/A"}
              disabled
            />
          </div>
          <div>
            <p>User Name</p>
            <input
              type="text"
              placeholder="John006"
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              value={noteDetailData?.username || "N/A"}
              disabled
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder="johndeo@testmail.com"
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              value={noteDetailData?.email || "N/A"}
              disabled
            />
          </div>
          <div>
            <p>Phone</p>
            <input
              type="text"
              placeholder="+977-9845678935"
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              value={noteDetailData?.mobile_number || "N/A"}
              disabled
            />
          </div>
          <div>
            <p>Address</p>
            <input
              type="text"
              placeholder="Shantinagar, Kathmandu"
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              disabled
            />
          </div>
          <div>
            <p>Role</p>
            <input
              type="text"
              placeholder="Author"
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              disabled
            />
          </div>
          <div>
            <p>Joining date</p>
            <input
              type="text"
              placeholder="07 Jun 2022    "
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              value={
                moment(noteDetailData?.date_joined).format("DD-MM-YYYY") ||
                "N/A"
              }
              disabled
            />
          </div>
          <div>
            <p>Note published</p>
            <input
              type="text"
              placeholder="17 notes    "
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              disabled
            />
          </div>
          <div>
            <p>Commision from author</p>
            <input
              type="text"
              placeholder="Rs. 7,500   "
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              disabled
            />
          </div>
          <div>
            <p>Author revenue</p>
            <input
              type="text"
              placeholder="Rs. 20,000   "
              className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
        <h2 className="text-[#F0F0F0]">Published Notes </h2>
      </div>
      {/* <div className="flex space-x-10 py-6">
        <Cards image="course1" />
        <Cards image="course2" />
        <Cards image="course3" />
        <Cards image="course4" />
      </div> */}
    </div>
  );
};
export default Details;
