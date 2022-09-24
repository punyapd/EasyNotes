import React, { useEffect, useState } from "react";
import CourseHeading from "./CourseHeading";
import Cards from "./Cards";
import Spinner from "../../reusable/loadingspinner/Spinner";
import Link from "next/link";
import Pagination from "../../reusable/pagination/Pagination";

type Props = {
  allNotesData: any;
  allNotesDataloading: any;
  categoryListData: any;
  categoryNoteList: any;
  setCategoryID: any;
  categoryID: any;
  limit: any;
  setLimit: any;
  offset: any;
  setOffset: any;
  page: any;
  setPage: any;
  activePagination: any;
  setActivePagination: any;
  headingOffset?:any;
  setHeadingOffset?:any;
  alltrendingNoteList:any;
  more?:any;
  setMore?:any;
};

const Courses = (props: Props) => {
  const {
    allNotesDataloading,
    allNotesData,
    categoryListData,
    categoryNoteList,
    setCategoryID,
    categoryID,
    limit,
    setLimit,
    offset,
    setOffset,
    page,
    setPage,
    activePagination,
    setActivePagination,
    headingOffset,
    setHeadingOffset,
    alltrendingNoteList, 
    more,
    setMore
  } = props;

  
  return (
    <>
      {allNotesDataloading ? (
        <Spinner />
      ) : (
        <div id="section4">
          <CourseHeading
            categoryListData={categoryListData}
            setCategoryID={setCategoryID}
            limit={limit}
            headingOffset={headingOffset}
            setLimit={setLimit}
            setHeadingOffset={setHeadingOffset}
            page={page}
            setPage={setPage}
            offset={offset}
            setOffset={setOffset}
          />
          <div>
            {categoryNoteList && categoryNoteList?.length === 0 ? (
              <div className="text-center font-Jost font-bold text-2xl my-4">
                <p>No results found!</p>
              </div>
            ) : (
              <div className="grid gap-10 px-8 w-full  sm:grid-cols-1 mb-8 md:grid-cols-4">
                {/* flex flex-wrap items-start justify-center gap-8 mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px] */}
                {!categoryID
                  ? allNotesData &&
                    allNotesData?.results?.map((item: any, index: any) => (
                      <Cards key={index} item={item} />
                    ))
                  : categoryNoteList &&
                    categoryNoteList?.results?.map((item: any, index: any) => (
                      <Cards key={index} item={item} />
                    ))}
              </div>
            )}
          </div>

          {activePagination && (
            // categoryNoteList?.next != null && (
            <div className="flex items-center justify-center my-10  md:my-12 ">
              <div>
                <Pagination
                  limit={limit}
                  setLimit={setLimit}
                  offset={offset}
                  setOffset={setOffset}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </div>
            //  )
          )} 
        </div>
      )}
      {more && <Link href="/notes">
          <div className="flex justify-center mb-8 mt-16">
            <button className="blue-btn w-[155px] ml-4">More Notes</button>
          </div>
        </Link>}
      
    </>
  );
};

export default Courses;

