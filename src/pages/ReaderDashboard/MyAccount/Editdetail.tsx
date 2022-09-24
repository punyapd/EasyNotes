import React from "react";
import { toast } from "react-toastify";
import ReaderEdityourdetails from "../../../components/backend/reader/ReaderEdityourdetails";
import {
  patchApiData,
  postApiData,
  putApiData,
} from "../../../helpers/AxiosInstances";
import APIS from "../../../helpers/EndPoints";
import { getUser } from "../../../helpers/sessionKey";
import useGetHook from "../../../hooks/useGetHooks";

const Editdetail = () => {
  let userInfo: any = JSON.parse(getUser("user_info") || "{}");

  const { isLoading: userProfileDataLoadings, data: userProfileDatass } =
    useGetHook({
      queryKey: "currentUserDatass",
      url: `${APIS.USER_PROFILE}${userInfo.id}`,
      parma: "",
      auth: true,
    });


  const editDetailHandle = async (data: any, formikProps: any) => {
    const url = `${APIS.USER_PROFILE}${userInfo?.id}/ `;
    const formData = new FormData();

    formData.append("user", userInfo?.id);
    formData.append(
      "full_name",
      `${data.first_name + data.middle_name + data.last_name}`
    );
    // formData.append("profile_image", `${data.category}`);
    try {
      const response = await patchApiData({ url, formData });
      if (response.status === 200) {
        toast.success("Update Success");
      } else {
        toast.error(response?.data);
        formikProps.setErrors(response.data.errors);
      }
    } catch (e) {
      console.log(e);
    }
    formikProps.setSubmitting(false);
  };
  return (
    <div>
      <ReaderEdityourdetails
        editDetailHandle={editDetailHandle}
        userProfileDataLoading={userProfileDataLoadings}
        userProfileData={userProfileDatass} userInfo={undefined}      />
    </div>
  );
};

export default Editdetail;
