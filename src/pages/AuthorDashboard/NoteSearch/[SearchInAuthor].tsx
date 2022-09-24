import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Notes from "../../../components/backend/Notes";
import { getApiData } from "../../../helpers/AxiosInstances";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";


type Props = {

}

const SearchInAuthor = (props:Props) => {
  

  const router = useRouter()
  const keyword = router.query;


  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  const { isLoading: notesListLoading, data: notesListDatas } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=5&offset=${offset}`,
    url: `${APIS.NOTES}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });


  

  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: APIS.CATEGORY,
    url: APIS.CATEGORY,
    parma: "",
    auth: true,
  });


  const { isLoading: searchAuthorLoading, data: searchAuthorData } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=5&offset=0&search=${keyword.SearchInAuthor}`,
    url: `${APIS.NOTES}?limit=5&offset=0&search=${keyword.SearchInAuthor}`,
    parma: "",
    auth: true,
  });

 



  let options: any = [{ id: 0, name: "All" }];

  Array.isArray(categoryListData)
    ? categoryListData?.map((item: any, index: any) =>
        options.push({ id: item.id, name: item.name })
      )
    : null;



  return (
    <div>
      <Notes
        notesListLoading={notesListLoading}
        notesListDatas={notesListDatas || []}
        options={options}
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        noteSearchLists={searchAuthorData}
      />
    </div>
  );
};
export default SearchInAuthor;


