import React from "react";
import ContactForm from "../../components/frontend/contact/ContactForm";
import MainLayout from "../../Layouts/MainLayout";
import APIS from "../../helpers/EndPoints";
import { postApiData } from "../../helpers/AxiosInstances";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const handleContactUs = async (data: any, formikProps: any) => {
    const url = APIS.CONTACT_US;
    const formData = data;
    const response = await postApiData({ url, formData, formikProps });
    if (response.status === 200 || response.status === 201) {
      toast.success("Send Successfully!");
    } else {
      toast.error(response?.data.detail);
    }
  };
  return (
    <MainLayout>
      <ContactForm handleContactUs={handleContactUs} />
    </MainLayout>
  );
};
export default Contactus;
