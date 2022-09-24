import React, { useState } from "react";
import Notes from "./Notes";
import Feedback from "./Feedback";
import Publisher from "./Publisher";
import Categories from "../exam/Categories";
import Relatedexams from "../exam/Relatedexams";
import NoteDetails from "../exam/NoteDetails";
import Spinner from "../../reusable/loadingspinner/Spinner";

type props = {
  noteDetailsData: any;
  noteDetailsDataLoading: any;
};

const All = (props: props) => {
  const { noteDetailsData, noteDetailsDataLoading } = props;
  return (
    <>
      {noteDetailsDataLoading ? (
        <Spinner />
      ) : (
        <div className="mx-[22px] sm:mx-[55px] md:md:mx-[65px] lg:mx-[80px] xl:mx-[125px] py-16 flex space-x-12 flex-col xl:flex-row items-start justify-between ">
          <div>
            <Notes examData={noteDetailsData} />
            <Feedback />
            <Publisher examData={noteDetailsData} />
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center flex-col xs:flex-row justify-center md:flex-col">
              <div className="mb-5 xs:mb-0">
                <NoteDetails examData={noteDetailsData} />
              </div>
              <Categories />
            </div>
            <div className="mt-5 md:mt-5">
              <Relatedexams examData={noteDetailsData} examDetailDataLoading={noteDetailsDataLoading} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default All;
