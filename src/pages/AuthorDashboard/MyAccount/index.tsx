import React, { useEffect } from "react";
import MyAccount from "../../../components/backend/author/MyAccount";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

const MyAccountDetail = () => {
  const { isLoading: userDataLoading, data: userData } = useGetHook({
    queryKey: "currentuserdetails",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });


  return (
    <MyAccount authorData={userData} authorDataLoading={userDataLoading} />
  );
};
export default MyAccountDetail;
