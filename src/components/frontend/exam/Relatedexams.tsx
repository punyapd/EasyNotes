import React, { useEffect, useState } from "react";
import Link from "next/link";
import Rating from "../notes/Rating";
import Spinner from "../../reusable/loadingspinner/Spinner";

type Props = {
  examData: any;
  examDetailDataLoading: any;
};

const Relatedexams = (props: Props) => {
  const { examData, examDetailDataLoading } = props;
  const relatedExamData = examData?.related_pdfnote;

  return (
    <div className="w-full md:w-auto xl:w-[350px] border-x-[1px] border-b-[1px]  border-[#E0E0E0] rounded-b-md  ">
      <div className="bg-theme row-span-1 rounded-t-md p-2 md:p-4 lg:p-6 text-md font-medium text-white">
        <p className=" ">Related Exams</p>
      </div>

      {examDetailDataLoading ? (
        <Spinner />
      ) : (
        relatedExamData.map((item: any, index: any) => (
          <div className="text-sm   p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between overflow-y-scroll" key={index}>
            <div className="flex flex-col space-y-4 text-[#37474F]">
              <h2 className=" text-md sm:text-lg font-Jost font-medium leading-4 ">
                Economics Complete Note
              </h2>
              <p>{item.description.slice(0,100)}</p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-3 justify-center">
                  <button className="small-blue-btn text-xs sm:text:base">
                    Rs. {item.price} 
                  </button>
                  <Rating textColor="text-white" />
                </div>
                <Link href={`/notes/${item.id}`}>
                  <div className="cursor-pointer text-theme font-bold decoration-none">
                    Read Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Relatedexams;
