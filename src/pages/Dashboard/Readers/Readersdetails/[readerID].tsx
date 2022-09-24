import React from "react";
import APIS from "../../../../helpers/EndPoints";
import useGetHook from "../../../../hooks/useGetHooks";
import { useRouter } from "next/router";
import Details from "../../../../components/backend/readers/Details";
import LoadingSpinner from "../../../../components/reusable/loadingspinner/Spinner";

const Authordetails = () => {
  const router = useRouter();
  const { readerID } = router.query;

  const { isLoading: readerDetailDataLoading, data: readerDetailData } =
    useGetHook({
      queryKey: "readerdetails",
      url: `${APIS.USER}${readerID}`,
      parma: "",
      auth: true,
    });

  
  return (
    <div className="flex bg-[#EEF1F8] space-x-[20px]">
      {readerDetailDataLoading ? (
        <LoadingSpinner />
      ) : (
        <Details readerDetailData={readerDetailData} />
      )}
    </div>
  );
};
export default Authordetails;
