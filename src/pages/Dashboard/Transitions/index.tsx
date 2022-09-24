import React, { useState } from "react";
import Transition from "../../../components/backend/admin/transition/Transition";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

export default function Transitions() {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)

  const { isLoading: authorListLoading, data: authorListDatas } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=5&offset=${offset}`,
    url: `${APIS.NOTES}?limit=5&offset=${offset}`,
    // url:`{APIS.AUTHORS}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });


  const { isLoading: allAuthorListLoading, data: allAuthorListDatas } = useGetHook({
    queryKey: 'allAuthorListDatas',
    url: APIS.NOTES,
    // url:`{APIS.AUTHORS}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });

  const { isLoading: authorsListLoading, data: authorsList } = useGetHook({
    queryKey: `${APIS.AUTHORS}?limit=5&offset=0`,
    url: `${APIS.AUTHORS}?limit=5&offset=0`,
    // url:`{APIS.AUTHORS}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });
  

  const { isLoading: readerListLoading, data: readerList } = useGetHook({
    queryKey: `${APIS.READERS}?limit=5&offset=0`,
    url: `${APIS.READERS}?limit=5&offset=0`,
    // url:`{APIS.AUTHORS}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });

  const { isLoading: allAuthorTotalLoading, data: allAuthorTotalDatas } = useGetHook({
    queryKey: 'allAuthorTotalDatas',
    url: APIS.ADMIN_TRANSITION,
    parma: "",
    auth: true,
  });

  return (
    <div>
      <Transition authorListDatas={authorListDatas} authorListLoading={authorListLoading} offset={offset} setOffset={setOffset} limit={limit} setLimit={setLimit} page={page} setPage={setPage} allAuthorListDatas={allAuthorListDatas} authorsList={authorsList} readerList={readerList} allAuthorTotalDatas={allAuthorTotalDatas}/>
    </div>
  );
}
