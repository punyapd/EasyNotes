import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Signin_formValidation } from "../formikvalidation/Formikfromvalidation";
import CustomeField from "../reusable/formikComponent/CustomeField";
import  CustomeButton  from "../reusable/buttons/CustomeButton";
import FormHeader from "../reusable/formheader/FormHeader";
import SideImagePanel from "../reusable/sideimagepanel/SideImagePanel";
import FormFooter from "../reusable/formfooter/FormFooter";

type Props = {
  resetPasswordHandler: any;
};
const signInInitialValues = {
  email: "",
  password: "",
};

const Resetpasswordcomponent = (props: Props) => {
  const { resetPasswordHandler } = props;
  return (
    <>
      <Formik
        initialValues={signInInitialValues}
        validationSchema={Signin_formValidation}
        onSubmit={(data, props) => resetPasswordHandler(data, props)}
      >
        {({ values }) => (
          <Form>
            <div className="grid md:grid-cols-8 ">
              <SideImagePanel />
              <div className="flex flex-col m-10 md:mt-32 text-[#323232] space-y-6   md:col-span-5 lg:col-span-4">
                <Link href="Main">
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
                    main_title={"Reset your password"}
                    sub_title={
                      "The verification email will be sent to the mailbox Please check it."
                    }
                  />
                </div>
                <CustomeField
                  label={"Email your email"}
                  name={"email"}
                  type={"text"}
                  fieldname={"Enter email"}
                />

                <div className="mt-9">
                  <CustomeField
                    label={"Enter varification code"}
                    name={"password"}
                    type={"password"}
                    fieldname={"Enter varification code"}
                  />
                  <Link href="/Signin">
                    <p className=" leading-6  font-Inter cursor-pointer text-[#ABABAB] text-sm mt-2 ml-2">
                      Back to Login
                    </p>
                  </Link>
                </div>
                <div>
                  <CustomeButton type={"submit"} name={"Verify"} />
                </div>
                <div>
                  <FormFooter
                    title={"Don't have an account?"}
                    link_name={"Signup"}
                    to={"Signup"}
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
export default Resetpasswordcomponent;
