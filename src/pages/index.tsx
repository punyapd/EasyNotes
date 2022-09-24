import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getKey } from "../helpers/sessionKey";
import CallAction from "../components/frontend/main/CallAction";
import Courses from "../components/frontend/main/Courses";
import Coverpage from "../components/frontend/main/Coverpage";
import Features1 from "../components/frontend/main/Features1";
import Features2 from "../components/frontend/main/Features2";
import Testimonial from "../components/frontend/main/Testimonial";
import Work from "../components/frontend/main/Work";
import APIS from "../helpers/EndPoints";
import useGetHook from "../hooks/useGetHooks";
import { getApiData } from "../helpers/AxiosInstances";
import MainLayout from "../Layouts/MainLayout";
import { useRouter } from "next/router";
import Head from "next/head";
import CoursesComponent from "../components/frontend/courses/Courses";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const [loadPage, setLoadPage] = useState(false);
  const [activePagination, setActivePagination] = useState(false);
  const [more, setMore] = useState(true)
  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserData",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });

  
  useEffect(() => {
    currentUserData
      ? sessionStorage.setItem("user_info", JSON.stringify(currentUserData))
      : null;
  }, [currentUserData]);

  return (
    <>
      {/* {loadPage ? ( */}
      <Head>
        <link rel="head-icon" href="/book.png" />
      </Head>
      <MainLayout>
        <Coverpage height={700} />
        <Features1 />
        <Features2 />
        <CoursesComponent
          activePagination={undefined}
          setActivePagination={undefined}
          more={more}
          setMore={setMore}
        />
        
        <CallAction />
        <Work />
        <Testimonial />
      </MainLayout>
      {/* ) : null} */}
    </>
  );
};

export default Home;
