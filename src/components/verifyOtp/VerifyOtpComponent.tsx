import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Signin_formValidation } from "../formikvalidation/Formikfromvalidation";
import CustomeField from "../reusable/formikComponent/CustomeField";
import CustomeButton from "../reusable/buttons/CustomeButton";
import FormHeader from "../reusable/formheader/FormHeader";
import SideImagePanel from "../reusable/sideimagepanel/SideImagePanel";
import FormFooter from "../reusable/formfooter/FormFooter";

type Props = {
  otpVerifyHandler: any;
  isloading: any;
};
const signInInitialValues = {
  username: "",
  otp: "",
};

const VerifyOtpComponent = (props: Props) => {
  const { otpVerifyHandler, isloading } = props;
  return (
    <>
      <Formik
        initialValues={signInInitialValues}
        // validationSchema={Signin_formValidation}
        onSubmit={(data, props) => otpVerifyHandler(data, props)}
      >
        {({ values }) => (
          <Form>
            <div className="grid md:grid-cols-8 justify-center">
              <SideImagePanel />
              <div className="flex flex-col  md:text-[#323232] flex justify-center ml-6 space-y-6 lg:col-span-4">
                <Link href="/">
                  <div className="md:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </Link>
                <div>
                  <FormHeader
                    main_title={"Verify Your Email"}
                    sub_title={
                      "Varification email will be sent to your mail box, Please check it."
                    }
                  />
                </div>
                <CustomeField
                  label={"Username"}
                  name={"username"}
                  type={"text"}
                  fieldname={"Enter Username"}
                />

                <div className="mt-9">
                  <CustomeField
                    label={"OTP"}
                    name={"otp"}
                    type={"OTP"}
                    fieldname={"Enter OTP send to your mail"}
                  />
                  <Link href="Resetpassword">
                    <p className=" leading-6  font-Inter cursor-pointer text-[#ABABAB] text-sm ml-2">
                      Forget Password ?
                    </p>
                  </Link>
                </div>
                <div>
                  <CustomeButton
                    type={"submit"}
                    name={"Verify"}
                    isLoading={isloading}
                  />
                </div>
                <div>
                  <FormFooter
                    title={"Back to"}
                    link_name={"Login"}
                    to={"/Signin"}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default VerifyOtpComponent;
