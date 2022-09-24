import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomeField from "../reusable/formikComponent/CustomeField";
import CustomeDropdown from "../reusable/formikComponent/CustomeDropdown";
import { Signup_formValidation } from "../formikvalidation/Formikfromvalidation";
import CustomeButton from "../reusable/buttons/CustomeButton";
import FormHeader from "../reusable/formheader/FormHeader";
import SideImagePanel from "../reusable/sideimagepanel/SideImagePanel";
import FormFooter from "../reusable/formfooter/FormFooter";

type Props = {
  signUpHandler: any;
  message: any;
  isloading: any;
};

const options = [
  { id: 0, name: "-----" },
  { id: 1, name: "Teacher" },
  { id: 2, name: "Student" },
];

const signupFormInitalValue = {
  username: "",
  full_name: "",
  email: "",
  mobile_number: "",
  role: "",
  password: "",
  confirm_password: "",
};

const Signupcomponent = (props: Props) => {
  const { signUpHandler, message, isloading } = props;
  return (
    <Formik
      initialValues={signupFormInitalValue}
      validationSchema={Signup_formValidation}
      onSubmit={(data, props) => signUpHandler(data, props)}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <div>
          <Form>
            <div className="grid sm:grid-cols-8 content-center">
              <SideImagePanel />
              <div className="flex flex-col justify-center ml-6 text-[#323232] col-span-5 gap-3   lg:col-span-4">
                <Link href="/">
                  <div className="md:hidden mt-10">
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
                    main_title={"Welcome Back"}
                    sub_title={"Create your account"}
                  />
                </div>
                <div className="flex flex-col xs:flex-row gap-3 ">
                  <CustomeField
                    label={"Username"}
                    name={"username"}
                    type={"text"}
                    fieldname={"Enter username"}
                  />
                  <CustomeField
                    label={"Full Name"}
                    name={"full_name"}
                    type={"text"}
                    fieldname={"Full Name"}
                  />
                </div>
                <div className="flex flex-col xs:flex-row gap-3 ">
                  <CustomeField
                    label={"Email"}
                    name={"email"}
                    type={"text"}
                    fieldname={"Email"}
                  />
                  <CustomeField
                    label={"Mobile Number"}
                    name={"mobile_number"}
                    type={"text"}
                    fieldname={"Mobile number"}
                  />
                </div>
                <div className="flex flex-col xs:flex-row gap-3 ">
                  <CustomeField
                    label={"Confirm Password"}
                    name={"confirm_password"}
                    type={"password"}
                    fieldname={"Confirm Password"}
                  />
                  <CustomeField
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    fieldname={"Password"}
                  />
                </div>
                <div>
                  <CustomeDropdown
                    name={"role"}
                    options={options}
                    label={"Role"}
                  />
                </div>

                <div>
                  <CustomeButton
                    type={"submit"}
                    name={"Signup"}
                    isLoading={isloading}
                  />
                </div>
                <div>
                  <FormFooter
                    title={"Already have an account?"}
                    link_name={"Signin"}
                    to={"Signin"}
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Signupcomponent;
