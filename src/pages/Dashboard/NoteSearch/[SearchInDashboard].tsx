import React, { useEffect, useState } from "react";
import Notes from "../../../components/backend/Notes";
import { getApiData } from "../../../helpers/AxiosInstances";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

type Props = {
  noteSearchLists?:any;
  searchKeyword?:any;
}

const SearchInDashboard = (props:Props) => {

  const { noteSearchLists, searchKeyword} = props
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const [data, setData] = useState([]);
  const { isLoading: notesListLoading, data: notesListDatas } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=5&offset=${offset}`,
    url: `${APIS.NOTES}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });


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

 
  return (
    <div>
      <Notes notesListLoading={notesListLoading} notesListDatas={notesListDatas || []} options={options} offset={offset} setOffset={setOffset} limit={limit} setLimit={setLimit} page={page} setPage={setPage} noteSearchLists={noteSearchLists}/>
    </div>
  );
};
export default SearchInDashboard;


export const getServerSideProps = async ({ params }: any) => {
  const noteSearchList = await getApiData(
    `${APIS.NOTES}?limit=5&offset=0&search=${params.SearchInDashboard}`
  );


  return {
    props: {
      noteSearchLists: noteSearchList?.data,
      searchKeyword: params.SearchInDashboard,
    },
  };
};
