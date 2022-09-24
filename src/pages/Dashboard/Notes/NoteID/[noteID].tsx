import React from "react";
import { useRouter } from "next/router";
import useGetHook from "../../../../hooks/useGetHooks";
import LoadingSpinner from "../../../../components/reusable/loadingspinner/Spinner";
import { getApiData } from "../../../../helpers/AxiosInstances";
import APIS from "../../../../helpers/EndPoints";
import Details from "../../../../components/backend/notes/Details";

type Props = {
  data: any;
};

const Notedetails = (props: Props) => {
  const { data } = props;
  const router = useRouter();
  const { noteID } = router.query;
  const { isLoading: noteDetailDataLoading, data: noteDetailData } = useGetHook(
    {
      queryKey: `${APIS.NOTES}${noteID}`,
      url: `${APIS.NOTES}${noteID}`,
      parma: "",
      auth: true,
    }
  );
  return (
    <div className="flex bg-[#EEF1F8]  space-x-[20px]">
      {noteDetailDataLoading ? (
        <LoadingSpinner />
      ) : (
        <Details noteDetailData={noteDetailData} />
      )}
    </div>
  );
};

export default Notedetails;
