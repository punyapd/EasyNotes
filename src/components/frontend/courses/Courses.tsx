import React, { useEffect, useState } from "react";
import Notecover from "../notes/Notecover";
import Courses from "../main/Courses";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";
import Link from "next/link";
import TrendingCourses from "../trendingNotes/TrendingCourses";



type Props = {
activePagination:any;
setActivePagination:any;
alltrendingNoteList?:any;
setIsActiveTrendingNotes?:any;
isActiveTrendingNotes?:any;
alltrendingNoteListLoading?:any;
more?:any;
setMore?:any;

}

const CoursesComponent = (props:Props) => {
  const {activePagination, setActivePagination, alltrendingNoteList, setIsActiveTrendingNotes, isActiveTrendingNotes, alltrendingNoteListLoading, setMore, more} = props;
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [headingOffset, setHeadingOffset] = useState(0) 

  const [categoryID, setCategoryID] = useState("");



  const { isLoading: allNotesDataloading, data: allNotesData } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=8&offset=${offset}`,
    url:`${APIS.NOTES}?limit=8&offset=${offset}`,
    parma: "",
  });

  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: `${APIS.CATEGORY}?limit=5&offset=${headingOffset}`,
    url: `${APIS.CATEGORY}?limit=5&offset=${headingOffset}`,
    parma: "",
  });

   
  const { isLoading: categoryNoteListLoading, data: categoryNoteList } =
    useGetHook({
      queryKey: `${APIS.NOTES}?category=${categoryID}&limit=8&offset=${offset}`,
      url: `${APIS.NOTES}?category=${categoryID}&limit=8&offset=${offset}`,
      parma: "",
    });



  return (
    <div>
      <Courses
        allNotesDataloading={allNotesDataloading}
        allNotesData={allNotesData}
        categoryListData={categoryListData}
        setCategoryID={setCategoryID}
        categoryID={categoryID}
        categoryNoteList={categoryNoteList}
        limit={limit}
        setLimit={setLimit}
        offset={offset}
        setOffset={setOffset}
        page={page}
        setPage={setPage}
        activePagination={activePagination}
        setActivePagination={setActivePagination}
        headingOffset={headingOffset}
        setHeadingOffset={setHeadingOffset}
        alltrendingNoteList={alltrendingNoteList} 
        more={more}
        setMore={setMore}
      />

    </div>
  );
};
export default CoursesComponent;
