import React, { useState } from "react";
import Courses from "../../components/frontend/main/Courses";
import Navbar from "../../components/frontend/main/Navbar";
import Notecover from "../../components/frontend/notes/Notecover";
import MainLayout from "../../Layouts/MainLayout";
import CoursesComponent from "../../components/frontend/courses/Courses";

import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import Link from "next/link";
import Pagination from "../../components/reusable/pagination/Pagination";

const Notes = () => {
  const [categoryID, setCategoryID] = useState(null);
  const [more, setMore] = useState(false)
 
  const [activePagination, setActivePagination] = useState(true)

  return (
    <div>
      <MainLayout>
        {/* <Notecover detail="Notes" /> */}
        {/* <Courses
          currentUserLoading={currentUserLoading}
          courseData={courseData}
          categoryListData={categoryListData}
          setCategoryID={setCategoryID}
          categoryID={categoryID}
          categoryNoteList={categoryNoteList}
        /> */}
        <CoursesComponent activePagination={activePagination} setActivePagination={setActivePagination} more={more} setMore={setMore} />
       
      </MainLayout>
    </div>
  );
};
export default Notes;
