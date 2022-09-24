import React from "react";
import Image from "next/image";
import Link from "next/link";
import Eye from "../../svg icons/Eye";
import Save from "../../svg icons/Save";
import Dollar from "../../svg icons/Dollar";
import Authorprofile from "../Authorprofile";
import FormInput from "../../../reusable/message/FormInput";

const notedetails =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function Details() {
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] ">
      {/* Heading  */}
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-10 ">
        <div className="flex items-center">
          <Link href="Dashboard">
            <h2 className="text-[#F0F0F0]">Notes </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <span>Note details</span>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center">
            <Dollar />
            See transistions
          </div>
          <div className="flex items-center">
            <Save />
            Save
          </div>
          <div className="flex items-center  ">
            <Eye />
            <Link href="ViewNotes" className="cursor-pointer">
              View Note
            </Link>
          </div>
        </div>
      </div>

      {/* input fields  */}
      <div className=" grid grid-cols-4 gap-5 font-normal my-5">
        <FormInput
          label={"Note title"}
          fieldname={"Physics note"}
          name={"notetitle"}
          type={"text"}
        />
        <FormInput
          label={"Price of Note"}
          fieldname={"Rs 2000"}
          name={"priceofnote"}
          type={"text"}
        />
        <FormInput
          label={"Duration of Notes"}
          fieldname={"lifetime"}
          name={"duration"}
          type={"text"}
        />
        <FormInput
          label={"Note commission"}
          fieldname={"50% of Note price"}
          name={"commission"}
          type={"text"}
        />
        <FormInput
          label={"Category"}
          fieldname={"Science"}
          name={"category"}
          type={"text"}
        />
        <FormInput
          label={"Status"}
          fieldname={"Pending"}
          name={"status"}
          type={"text"}
        />
        <FormInput
          label={"Sales Count"}
          fieldname={"04 sales"}
          name={"sales"}
          type={"text"}
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-normal">Note Description</h2>
          <textarea
            name=""
            id=""
            placeholder={notedetails}
            className=" p-5 w-[529px] h-[357px] border-[1px] border-[#E0E0E0] rounded-lg"
            disabled
          ></textarea>
        </div>
        <Authorprofile />
      </div>
    </div>
  );
}
