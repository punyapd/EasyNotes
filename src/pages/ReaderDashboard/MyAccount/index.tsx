import React from "react";
import ReaderMyAccount from "../../../components/backend/reader/ReaderMyAccount";
import APIS from "../../../helpers/EndPoints";
import { getUser } from "../../../helpers/sessionKey";
import useGetHook from "../../../hooks/useGetHooks";

type Props = {};

const MyAccount = (props: Props) => {
 
  let userID: any = JSON.parse(getUser("user_info") || "{}")

  const { isLoading: userProfileDataLoading, data: userProfileDatas } =
    useGetHook({
      queryKey: "userProfileDatas",
      url: `${APIS.USER_PROFILE}${userID.id}`,
      parma: "",
      auth: true,
    });

  return (
    <div >
<ReaderMyAccount
    userProfileDataLoading={userProfileDataLoading}
      userProfileData={userProfileDatas}
      // userID={userID}
    />
    </div>
    
  );
};

export default MyAccount;
