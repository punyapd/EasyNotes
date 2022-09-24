import React, { useEffect, useState } from "react";
import Signincomponent from "../../components/signin/Signincomponent";
import APIS from "../../helpers/EndPoints";
import { useRouter } from "next/router";
import { postApiData } from "../../helpers/AxiosInstances";
import { getKey, setKey } from "../../helpers/sessionKey";
import { toast, ToastContainer } from "react-toastify";
import { InferGetServerSidePropsType } from "next";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);

  const signInHandler = async (data: any, formikProps: any) => {
    setIsLoading(true);
    const url = APIS.LOGIN;
    const formData = data;
    const response = await postApiData({ url, formData, formikProps });
    if (response?.status === 200 || response.status === 201) {
      const userAuth = {
        accessToken: response?.data.access,
        refressToken: response.data.refresh,
      };
      setKey("userAuth", JSON.stringify(userAuth));
      toast("Login Success!!");
      router.push("/");
      setIsLoading(false);
    } else {
      toast.error(response?.data.detail || "Login Fail!");
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <ToastContainer />
      <Signincomponent signInHandler={signInHandler} isloading={isloading} />
    </>
  );
};
export default Login;
