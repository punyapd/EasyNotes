import React from "react";
import Notecover from "../../components/frontend/notes/Notecover";
import All from "../../components/frontend/notes/All";
import { useRouter } from "next/router";
import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import MainLayout from "../../Layouts/MainLayout";

const Examdetails = () => {
  const router = useRouter();

  const { noteID } = router.query;

  const { isLoading: noteDetailsDataLoading, data: noteDetailsData } =
    useGetHook({
      queryKey: `${APIS.NOTES}${noteID}`,
      url: `${APIS.NOTES}${noteID}`,
      parma: "",
    });

  return (
    <MainLayout>
      <All noteDetailsData={noteDetailsData} noteDetailsDataLoading={noteDetailsDataLoading}/>
    </MainLayout>
  );
};
export default Examdetails;
