import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSave } from "react-icons/fi";
import CustomeInput from "../../reusable/input/CustomeInput";
import CustomInpuField from "../../reusable/formikComponent/CustomInpuField";
import { Form, Formik } from "formik";
import Spinner from "../../reusable/loadingspinner/Spinner";

type Props = {
  editDetailHandle: any;
  userProfileDataLoading: any;
  userProfileData: any;
  userInfo:any
};
const ReaderEdityourdetails = (props: Props) => {
  const { userProfileData, userProfileDataLoading, editDetailHandle, userInfo } = props;

  const UserProfileFormInitialValue = {
    user: null,
    username: "",
    salutation: null,
    first_name: userProfileData?.full_name,
    middle_name: "",
    last_name: "",
    email: userProfileData?.user?.email,
    phone: null,
    address: null,
  };

  return (
    <>
      {userProfileDataLoading ? (
        <Spinner />
      ) : (
        <Formik
          initialValues={UserProfileFormInitialValue}
          onSubmit={(data, props) => editDetailHandle(data, props)}
        >
          <Form>
            <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto ">
              <div className=" h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
                <div className="flex items-center justify-between  ">
                  <Link href="Authors">
                    <h2 className="text-[#F0F0F0]">My accounts </h2>
                  </Link>
                  <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
                  <Link href="Notedetails">
                    <span>Edit your details</span>
                  </Link>
                </div>
                <button
                  className="flex items-center justify-center gap-4"
                  type="submit"
                >
                  <FiSave />
                  <p>Save your details</p>
                </button>
              </div>

              <div className="gap-5 content-center  my-6  items-center justify-center lg:grid lg:grid-cols-4 ">
                <div className="h-28 w-32 lg:w-full lg:h-full">
                  <Image
                    src={"/publisher image.png"}
                    alt="publishers"
                    height={228}
                    width={255}
                    layout="responsive"
                  />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 font-normal  col-span-3 gap-6 ">
                  <CustomInpuField
                    type={"text"}
                    fieldname={`Mr. ${userProfileData?.full_name}`}
                    label={"Salutation"}
                    name={"salutation"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname={userProfileData?.user?.username}
                    label="Username"
                    name={"username"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname={userProfileData?.full_name}
                    label={"First Name"}
                    name={"first_name"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname="middle name"
                    label={"Middle Name"}
                    name={"middle_name"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname="last name"
                    label={"Last Name"}
                    name={"last_name"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname={userProfileData?.user?.email}
                    label={"Email"}
                    name={"email"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname={userProfileData?.user?.mobile_number}
                    label={"Phone"}
                    name={"phone"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname="address"
                    label={"Address"}
                    name={"address"}
                  />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};
export default ReaderEdityourdetails;
