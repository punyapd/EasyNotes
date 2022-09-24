import React, { useState } from "react";
import VerifyOtpComponent from "../../components/verifyOtp/VerifyOtpComponent";
import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import { useRouter } from "next/router";
import { getApiData } from "../../helpers/AxiosInstances";
import { postApiData } from "../../helpers/AxiosInstances";
import { getKey, setKey } from "../../helpers/sessionKey";
import { toast, ToastContainer } from "react-toastify";
import { InferGetServerSidePropsType } from "next";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const VerifyOtp = () => {
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);

  const otpVerifyHandler = async (data: any, formikProps: any) => {
    setIsLoading(true);
    const url = APIS.VERIFY_OTP;
    const formData = data;
    let auth = false;
    const response = await postApiData({ url, formData, formikProps, auth });
    if (response?.status === 200 || response.status === 201) {
      toast("OTP verification Success!!");
      router.push("/Signin");
      setIsLoading(false);
    } else {
      toast.error(response?.data.detail || "Varification Fail!");
    }
  };
  return (
    <>
      <Head>
        <title>Verify OTP</title>
      </Head>
      <ToastContainer />
      <VerifyOtpComponent
        otpVerifyHandler={otpVerifyHandler}
        isloading={isloading}
      />
    </>
  );
};
export default VerifyOtp;
