import React, { useState } from "react";
import Notecover from "../../components/frontend/notes/Notecover";
import Courses from "../../components/frontend/main/Courses";
import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import MainLayout from "../../Layouts/MainLayout";
import CoursesComponent from "../../components/frontend/courses/Courses";
import TrendingCourses from "../../components/frontend/trendingNotes/TrendingCourses";

const Trendingnotes = () => {
  const [categoryID, setCategoryID] = useState(null);
  const [isActiveTrendingNotes, setIsActiveTrendingNotes] = useState(true)
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [headingOffset, setHeadingOffset] = useState(0) 
  
  const { isLoading: alltrendingNoteListLoading, data: alltrendingNoteList } =
    useGetHook({
      queryKey: 'trendingNoteList',
      url: APIS.TRENDING_NOTES,
      parma: "",
      // auth: true,
    });


    const { isLoading: categoryTrendingNoteListLoading, data: categoryTrendingNoteList } =
    useGetHook({
      queryKey: `${APIS.TRENDING_NOTES}?category=${categoryID}`,
      url: `${APIS.TRENDING_NOTES}?category=${categoryID}`,
      parma: "",
      // auth: true,
    });




    const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
      queryKey: `${APIS.CATEGORY}?limit=5&offset=${headingOffset}`,
      url: `${APIS.CATEGORY}?limit=5&offset=${headingOffset}`,
      parma: "",
    });


  return (
    <MainLayout>
      {/* <Notecover detail="Trending Notes" /> */}
      {/* <Courses
        currentUserLoading={currentUserLoading}
        courseData={courseData}
        categoryListData={categoryListData}
        setCategoryID={setCategoryID}
        categoryID={categoryID}
        categoryNoteList={categoryNoteList}
      /> */}
      <TrendingCourses alltrendingNoteListLoading={alltrendingNoteListLoading} alltrendingNoteList={alltrendingNoteList} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset}  setCategoryID={setCategoryID} categoryID={categoryID} categoryTrendingNoteList={categoryTrendingNoteList} page={page} setPage={setPage} categoryListData={categoryListData} headingOffset={headingOffset} setHeadingOffset={setHeadingOffset} />
    </MainLayout> 
  );
}
export default Trendingnotes;
