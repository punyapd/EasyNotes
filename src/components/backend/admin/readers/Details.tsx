import React from "react";
import Link from "next/link";
import Cards from "../../../frontend/main/Cards";
import Image from "next/image";
import CustomeInput from "../../../reusable/input/CustomeInput";
import CustomeField from "../../../reusable/formikComponent/CustomeField";

type Props = {
  authorDetails: any;
};
const Details = (props: Props) => {
  const { authorDetails } = props;
   const handleChange = () => {
    console.log("handle change details")
   }
  return (
    <div className="p-4 h-screen w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto ">
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-2 md:px-10 ">
        <div className="flex items-center">
          <Link href="Readers">
            <h2 className="text-[#F0F0F0]">Readers </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <Link href="Notedetails">
            <span>Reader details</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 my-5 gap-x-4">
        <div className="col-span-1">
          <Image
            src="/publisher image.png"
            alt="publishers"
            width={255}
            height={228}
            layout="responsive"
          />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 font-normal col-span-3 gap-3  xl:gap-6 ">
          <CustomeInput
            title={"Full name"}
            type="text"
            value={authorDetails?.profile?.full_name || ""}
            placeholder={"Full name"}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            value={authorDetails?.username || ""}
            title={"User Name"}
            placeholder={"User Name"}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            value={authorDetails?.email || ""}
            title={"Email"}
            placeholder={"Email"}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            value={authorDetails?.mobile_number || ""}
            title={"Phone"}
            placeholder={"Phone"}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            title={"Address"}
            placeholder={"Address"}
            value={authorDetails?.address || ""}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            value={"Author" || ""}
            title={"Role"}
            placeholder={"Author"}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            value={authorDetails?.date_joined || ""}
            title={"Joining date"}
            placeholder={"Joining Date"}
            // onChange={handleChange}
          />
          <CustomeInput
            type="text"
            title={"Subscribed"}
            placeholder={"Subscribe"}
            // onChange={handleChange}
            value={"" || ""}
          />
          <CustomeInput
            type="text"
            title={"Reader Expenses"}
            placeholder={"Reader Expenses"}
            value={"" || ""}
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
        <h2 className="text-[#F0F0F0]">Subscribed notes </h2>
      </div>
      <div className="flex space-x-10 py-6">
        {/* <Cards image="course1" />
        <Cards image="course2" />
        <Cards image="course3" />
        <Cards image="course4" /> */}
      </div>
    </div>
  );
};
export default Details;
