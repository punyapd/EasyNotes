import React, { useState } from "react";
import Image from "next/image";
import Menu from "../../backend/svg icons/Menu";
import Close from "../../backend/svg icons/Close";
import NoteDetails from "../exam/NoteDetails";
import Categories from "../exam/Categories";
import Relatedexams from "../exam/Relatedexams";

type Props = {
  examData: any;
};

const Notes = (props: Props) => {
  const { examData } = props;
  const [preview, setPreview] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  text-[#37474F] ">
      <Image
        src="/economics image.png"
        alt="note"
        height={422}
        width={1000}
        layout="responsive"
      />
      <div className="flex items-center justify-between">
        <h1 className="leading-6 xs:leading-[48px] mt-4 text-xl xs:text-2xl sm:text-3xl md:text-[35px]  font-semibold font-Jost ">
          {examData?.title}
        </h1>
        {!isOpen ? (
          <div className="xl:hidden" onClick={(e) => setIsOpen(!isOpen)}>
            <Menu />
          </div>
        ) : (
          <div className="xl:hidden" onClick={(e) => setIsOpen(!isOpen)}>
            <Close />
          </div>
        )}
      </div>
      {isOpen && (
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3  gap-5  xl:hidden">
          <div className="grid sm:grid-cols-2 col-span-2 gap-5 lg:grid-flow-col">
            <Categories />
            <NoteDetails examData={examData} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Relatedexams examData={undefined} examDetailDataLoading={undefined} />
          </div>
        </div>
      )}
      <div className="flex  flex-col xs:flex-row justify-start mt-3 sm:mt-4 md:mt-5 lg:mt-9 mb-5 items-start xs:space-x-10 space-y-1 text-xs xs:text-sm xs:space-y-0 text- font-medium font-Jost">
        <div className="flex items-center">
          <Image src="/time.png" alt="" width={20} height={20} />
          <span className="ml-4 font-Jost font-medium">
            23, June - 30, July 2022
          </span>
        </div>
        <div className="flex items-center">
          <Image src="/bookmark.png" alt="" width={20} height={20} />
          <span className="ml-4 font-Jost font-medium">30 ongoing</span>
        </div>
      </div>
      <div className="md:w-full text-sm leading-[17px] md:leading-[24px] text-justify font-Inter font-medium text-[#37474F] "></div>
      <div>
        <p>{examData?.description}</p>
      </div>
    </div>
  );
};

export default Notes;
