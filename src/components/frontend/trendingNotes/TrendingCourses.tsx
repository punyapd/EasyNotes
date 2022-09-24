import React from 'react'
import Spinner from "../../reusable/loadingspinner/Spinner";
import Pagination from '../../reusable/pagination/Pagination';
import Cards from '../main/Cards';
import CourseHeading from '../main/CourseHeading';


type Props = {
    alltrendingNoteList?:any;
    alltrendingNoteListLoading?:any;
    limit:any;
    setLimit:any;
    offset:any;
    setOffset:any;
    page?:any;
    setPage?:any;
    categoryListData?:any;
    setCategoryID?:any;
    categoryID?:any;
    categoryTrendingNoteList?:any;
    headingOffset?:any;
    setHeadingOffset?:any;

}

const TrendingCourses = (props: Props) => {
    const {alltrendingNoteListLoading, alltrendingNoteList, limit, setLimit, offset, setOffset, page, setPage, categoryListData, setCategoryID, categoryID, categoryTrendingNoteList, headingOffset, setHeadingOffset} = props;

  return (
    <div>
        <>
      {alltrendingNoteListLoading ? (
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
                setPage={setPage} offset={undefined} setOffset={undefined}          />
          <div>
            {/* {categoryNoteList && categoryNoteList?.length === 0 ? (
              <div className="text-center font-Jost font-bold text-2xl my-4">
                <p>No results found!</p>
              </div>
            ) : ( */}
              <div className="grid gap-10 px-8 w-full  sm:grid-cols-1 mb-8 md:grid-cols-4">
                {/* flex flex-wrap items-start justify-center gap-8 mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px] */}
                {!categoryID
                  ? alltrendingNoteList &&
                    alltrendingNoteList?.map((item: any, index: any) => (
                      <Cards key={index} item={item} />
                    ))
                  : categoryTrendingNoteList &&
                  categoryTrendingNoteList?.map((item: any, index: any) => (
                      <Cards key={index} item={item} />
                    ))
                    }
              </div>
            {/* )} */}
          </div>
           
        </div>
      )}
    </>
    </div>
  )
}

export default TrendingCourses