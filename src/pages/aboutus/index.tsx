import React from "react";
import Notecover from "../../components/frontend/notes/Notecover";
import Footer from "../../components/frontend/main/Footer";
import Goal from "../../components/frontend/aboutus/Goal";
import Built from "../../components/frontend/aboutus/Built";
import Testimonial from "../../components/frontend/main/Testimonial";
import MainLayout from "../../Layouts/MainLayout";
const Aboutus = () => {
  return (
    <MainLayout>
      {/* <Notecover detail="About Us" /> */}
      <Goal />
      <Built />
      <Testimonial />
    </MainLayout>
  );
};
export default Aboutus;
