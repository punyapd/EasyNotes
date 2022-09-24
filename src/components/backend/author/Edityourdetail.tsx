import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSave } from "react-icons/fi";
import CustomeInput from "../../reusable/input/CustomeInput";
import CustomInpuField from "../../reusable/formikComponent/CustomInpuField";
import { Form, Formik } from "formik";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";
import { useRouter } from "next/router";
import { patchApiData } from "../../../helpers/AxiosInstances";
import { toast } from "react-toastify";

const Edityourdetail = () => {
  const [fileName, setFileName] = useState(null)



  const ref = useRef<any>()
  const handleClick = () =>{
    ref.current.click()

  }

  // changes

  const { isLoading: userProfileLoading, data: userProfile } = useGetHook({
    queryKey: "categoryData",
    url: APIS.USERPROFILE,
    parma: "",
    auth: true,
  });


  let authorData = JSON.parse(sessionStorage.getItem("user_info") || "{}");
  const router = useRouter();
  const { authorID } = router.query;


  const { isLoading: userDataLoading, data: userData } = useGetHook({
    queryKey: "currentuserdetails",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });


  const { isLoading: editListLoading, data: notesDetails } = useGetHook({
    queryKey: "authors",
    url: `${APIS.USER_PROFILE}${authorID}`,
    parma: "",
    auth: true,
  });


  const userDetailUpdateHandler = async (values: any, formikProps: any) => {
    const url = `${APIS.USER_PROFILE}${authorID}/`;
  
    const formData = new FormData();



    formData.append("user", `${userProfile[0].user}`);
    formData.append(
      "full_name",
      `${values.firstname + values.middlename + values.lastname}`
    );
    // formData.append('firstname', `${values.firstname}`)
    formData.append("profile_image", `${values.profile_image}`);
    formData.append("email", `${values.email}`);

    // formData.append('profile_image', `${}`)
    try {
      const response = await patchApiData({ url, formData, formikProps });
      if (response.status === 200) {
        toast.success("Update Success");
      } else {
        console.log(response?.data, "errors");
        toast.error(response?.data);
        formikProps.setErrors(response.data.errors);
      }
    } catch (e) {
      console.log(e);
    }
    formikProps.setSubmitting(false);
  };

  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: "categoryData",
    url: APIS.CATEGORY,
    parma: "",
    auth: true,
  });

  let options: any = [{ id: 0, name: "Choose Category" }];

  Array.isArray(categoryListData)
    ? categoryListData?.map((item: any, index: any) =>
        options.push({ id: item.id, name: item.name })
      )
    : null;

  const userDetailsInitialsvalues = {
    user: null,
    firstname: notesDetails?.full_name,
    middlename: "",
    lastname: "",
    email:"",
    profile_image: notesDetails?.user?.profile?.profile_image,
  };

  return (
    //changes
    <Formik
      initialValues={userDetailsInitialsvalues}
      // validationSchema={noteDetail_formValidation}
      onSubmit={(values, props) => userDetailUpdateHandler(values, props)}
    >
      {({}) => (
        <Form>
          {/* no changes */}
          <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto ">
            <div className=" h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
              <div className="flex items-center justify-between  ">
                <Link href="Authors">
                  <h2 className="text-[#F0F0F0]">My account</h2>
                </Link>
                <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
                <Link href="Notedetails">
                  <span>Edit your details</span>
                </Link>
              </div>
              <button className="flex cursor-pointer" type="submit">
                <FiSave />
                <p>Save your details</p>
              </button>
            </div>

            <div className="flex flex-wrap my-6  items-center justify-center lg:grid lg:grid-cols-4 ">
              <div>
                <div className="relative h-[228px] w-[255px] mb-5">
                  <Image
                    src="/publisher image.png"
                    alt="publishers"
                    layout="fill"
                  />
                  <div
                    onClick={()=>handleClick()}
                    className="absolute bottom-[2%] left-[40%] cursor-pointer"
                  >
                    <Image
                      src="/upload_icon.png"
                      alt="uploadicon"
                      height={40}
                      width={40}
                    />
                  </div>
                  <input type="file" ref={ref}  />

                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 font-normal  col-span-3 gap-6 ">
                <CustomInpuField
                  type={"text"}
                  fieldname="Enter Your First Name"
                  label={"First Name"}
                  name={"firstname"}
                />
                {/* <CustomeInput
            type="text"
            placeholder="Username"
            title={"Username"}
            value={undefined}
            onChange={handleChange}
          /> */}

                {/* <CustomeInput
                  type="text"
                  placeholder="John"
                  title={"First Name"}
                  value={undefined}
                  onChange={handleChange}
                /> */}

                <CustomInpuField
                  type={"text"}
                  fieldname="Middle Name"
                  label={"Middle Name"}
                  name={"middlename"}
                />
                {/* 
                <CustomeInput
                  type="text"
                  placeholder="Enter middle name"
                  title={"Middle Name"}
                  value={undefined}
                  onChange={handleChange}
                /> */}

                <CustomInpuField
                  type={"text"}
                  fieldname="Last Name"
                  label={"Last Name"}
                  name={"lastname"}
                />

                <CustomInpuField
                  type={"email"}
                  fieldname="Email"
                  label={"Email ID"}
                  name={"email"}
                />

                {/* <CustomeInput
                  type="text"
                  placeholder="Deo"
                  title={"Last Name"}
                  value={undefined}
                  onChange={handleChange}
                /> */}

                <CustomInpuField
                  type={"text"}
                  fieldname="Role"
                  label={"Role"}
                  name={"role"}
                />

                {/* <CustomeInput
                  type="text"
                  placeholder="johndeo@testmail.com"
                  title={"Email"}
                  value={undefined}
                  onChange={handleChange}
                /> */}
                <CustomInpuField
                  type={"date"}
                  fieldname="Date"
                  label={"Date"}
                  name={"date"}
                />

                {/* <CustomeInput
                  type="text"
                  placeholder="+97952545155    "
                  title={"Phone"}
                  value={undefined}
                  onChange={handleChange}
                /> */}
                <CustomInpuField
                  type={"text"}
                  fieldname="Reader"
                  label={"Reader"}
                  name={"reader"}
                />
                {/* <CustomeInput
                  type="text"
                  placeholder="Shantinagar, Baneshwor  "
                  title={"Address"}
                  value={undefined}
                  onChange={handleChange}
                /> */}
                <CustomInpuField
                  type={"text"}
                  fieldname="Subscription"
                  label={"Subscription"}
                  name={"subscription"}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Edityourdetail;
