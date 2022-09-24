import React, { useEffect } from "react";
import Details from "../../../../components/backend/admin/readers/Details";
import APIS from "../../../../helpers/EndPoints";
import { getApiData } from "../../../../helpers/AxiosInstances";
import useGetHook from "../../../../hooks/useGetHooks";
import { useRouter } from "next/router";
import LoadingSpinner from "../../../../components/reusable/loadingspinner/Spinner";

type Props = {
  AuthorDetailsData: any;
  url: any;
  setShowSearch: any;
};
const Authordetails = (props: Props) => {
  const { AuthorDetailsData, setShowSearch, url } = props;

  const router = useRouter();

  const { authorID } = router.query;

  const { isLoading: authorListLoading, data: authorDetails } = useGetHook({
    queryKey: "authorlist",
    url: `${APIS.USER}${authorID}`,
    parma: "",
    auth: true,
  });

  return (
    <div className="flex bg-[#EEF1F8] space-x-[20px]">
      {authorListLoading ? (
        <div className="flex items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <Details authorDetails={authorDetails} />
      )}
    </div>
  );
};
export default Authordetails;


