import Head from "next/head";
import React from "react";
import SearchComponent from "../../components/frontend/Search/SearchComponent";
import MainLayout from "../../Layouts/MainLayout";
import APIS from "../../helpers/EndPoints";
import { getApiData } from "../../helpers/AxiosInstances";

type Props = {
  noteSearchLists: any;
  searchKeyword: any;
};
const search = (props: Props) => {
  const { noteSearchLists, searchKeyword } = props;
  
  return (
    <MainLayout>
      <Head>
        <title>Search</title>
      </Head>
      <SearchComponent
        noteSearchLists={noteSearchLists}
        searchKeyword={searchKeyword}
      />
    </MainLayout>
  );
};

export default search;

export const getServerSideProps = async ({ params }: any) => {
  const noteSearchList = await getApiData(
    `${APIS.NOTES}?search=${params.keyword}`
  );

  return {
    props: {
      noteSearchLists: noteSearchList?.data,
      searchKeyword: params.keyword,
    },
  };
};
