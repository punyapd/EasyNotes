import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/frontend/main/Navbar";
import Footer from "../components/frontend/main/Footer";
import Notecover from "../components/frontend/notes/Notecover";
import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: any;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  const router = useRouter();
  const headername = router.pathname;

  let headName = null;
  let subDetail = null;
  switch (headername) {
    case "/":
      headName = "Home";
      subDetail = "Home";
      break;
    case "/notes":
      headName = "Notes";
      subDetail = "Notes";
      break;
    case "/trendingnotes":
      headName = "Tranding Notes";
      subDetail = "Popular Notes";
      break;
    case "/contactus":
      headName = "Contact Us";
      subDetail = "Contact us to know more about us";
      break;
    case "/aboutus":
      headName = "About Us";
      subDetail = "Know more about us";
      break;
    case headername:
      headName = "Search your favourate notes";
      subDetail = "Search";
      break;
    case "/notes/[noteID]":
      headName = "Notes";
      subDetail = "Beautiful Notes";
      break;
  }

  return (
    <div className="font-primary">
      <Head>
        <title>{headName}</title>
        <link rel="head-icon" href="/favicons/head-icon.png" />
      </Head>
      <Navbar />
      <ToastContainer autoClose={2000} />
      {headName === "Home" ? null : (
        <Notecover detail={headName} sub_detail={subDetail} />
      )}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
