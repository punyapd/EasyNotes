import React, { useState } from "react";
import { useRouter } from "next/router";
import APIS from "../../helpers/EndPoints";
import { postApiData } from "../../helpers/AxiosInstances";
import Signupcomponent from "../../components/signup/Signupcomponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Signup = () => {
  const [message, setMessage] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();

  const signUpHandler = async (data: any, formikProps: any) => {
    setIsLoading(true);
    const url = APIS.REGISTER;
    const formData = data;
    let auth = false;
    const response = await postApiData({ url, formData, formikProps, auth });

    if (response.status === 200 || response.status === 201) {
      router.push("/verify_otp");
      toast.success("Registration Success Please verify");
      setIsLoading(false);
    } else {
      toast.error(response?.data.detail);
    }
  };
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <ToastContainer />
      <Signupcomponent
        signUpHandler={signUpHandler}
        message={message}
        isloading={isloading}
      />
    </>
  );
};
export default Signup;
