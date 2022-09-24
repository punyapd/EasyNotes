import React, { useState } from "react";
import Link from "next/link";
import Authorprofile from "../Authorprofile";
import CustomeInput from "../../reusable/input/CustomeInput";
import ViewNote from "../../../components/backend/notes/ViewNotes";

type Props = {
  noteDetailData: any;
};
const Details = (props: Props) => {
  const [viewnote, setViewNotes] = useState(false);
  const { noteDetailData } = props;
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] ">
      {!viewnote ? (
        <>
          <div className="w-full h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-5 ">
            <div className="flex items-center">
              <Link href="/Dashboard/Notes">
                <h2 className="text-[#F0F0F0]">Notes </h2>
              </Link>
              <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
              <span>Note details</span>
            </div>
            <div className="flex lg:space-x-10">
            
              <div className="flex items-center cursor-pointer">
                <button onClick={() => setViewNotes(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-45 w-5 opacity-75 mr-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span
                  onClick={() => setViewNotes(true)}
                  className="hidden lg:block"
                >
                  View Note
                </span>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-normal my-5">
            <CustomeInput
              title={"Note title"}
              type={"text"}
              placeholder={"Physic note"}
              value={noteDetailData?.title ? noteDetailData.title : "N/A"}
            />
            <CustomeInput
              title={"Price of Note"}
              type={"text"}
              placeholder={"Rs 2000"}
              value={noteDetailData?.price ? noteDetailData.price : "N/A"}
            />
            <CustomeInput
              title={"Duration of Note"}
              type={"text"}
              placeholder={"lifetime"}
              value={""}
            />
            <CustomeInput
              title={"Note comission"}
              type={"text"}
              placeholder={"50% of Note price - Rs 1,000"}
              value={"commision"}
            />
            <CustomeInput
              title={"Category"}
              type={"text"}
              placeholder={"Science"}
              value={"Category"}
            />
            <CustomeInput
              title={"Status"}
              type={"text"}
              placeholder={"Pending"}
              value={"not define"}
            />
            <CustomeInput
              title={"Sales Count"}
              type={"text"}
              placeholder={"04 sales"}
              value={"no data from backend: bikram"}
            />
          </div>
          <h2 className="font-normal">Note Description</h2>
          <div className=" grid  sm:grid-cols-4 gap-6">
            <div className="sm:col-span-2">
              <textarea
                name=""
                id=""
                placeholder="Note descriptions"
                className=" p-5 w-full h-[357px] border-[1px] border-[#E0E0E0] rounded-lg"
                value={noteDetailData?.description}
                disabled
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <Authorprofile authorData={noteDetailData.user} />
            </div>
          </div>
        </>
      ) : (
        <ViewNote noteData={noteDetailData} />
      )}
    </div>
  );
};
export default Details;
