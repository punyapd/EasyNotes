import React, { useEffect, useState } from "react";
import Link from "next/link";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";
import LoadingSpinner from "../../reusable/loadingspinner/Spinner";
import CustomeTable from "../../reusable/custometable/CustomeTable";
import moment from "moment";
import ViewLinks from "../../reusable/customLink/ViewLinks";

type Props = {
  readerlistLoading: any;
  readerListData: any;
  studentEnrollData:any;
  limit:any;
  setLimit:any;
  offset:any;
  setOffset:any;
  page:any;
  setPage:any;
  sn?:any;
  setSn?:any;
  noteSearchLists?:any;
};

const columns = [
  { field: "sn", header: "S.NO" },
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "author", header: "Author" },
  { field: "date", header: "Date" },
  { field: "action", header: "Action" },
];

const Readerlist = (props: Props) => {
  const { readerlistLoading, studentEnrollData, readerListData, limit, setLimit, offset, setOffset, page, setPage, sn, setSn, noteSearchLists } = props;

  const [readerData, setReaderData] = useState([]);


  useEffect(() => {
    setReaderData(readerData);
  }, [readerData]);

  let data: any = [];

  console.log('studentenrollddd', studentEnrollData);

  noteSearchLists ? (noteSearchLists?.results?.map((list: any, index: any) =>
  data.push({
    sn: index + sn,
    title: list?.note?.title,
    category: list?.note?.category[0].name,
    // list?.category ? list?.category?.map((item:any, index:any)=>{
    //   item?.name
    // }) : 'N/A',
    author: list?.note?.created_by?.profile?.full_name ? list?.note?.created_by?.profile?.full_name : "N/A",
    date: list?.user?.date_joined
      ? moment(list?.user?.date_joined).format("DD-MM-YYYY")
      : "N/A",
    action: (
      <ViewLinks linksto={`/ReaderDashboard/Notes/${list?.note?.id}`} />
    ),
  })
)): studentEnrollData && studentEnrollData?.map((list: any, index: any) =>
    data.push({
      sn: index + sn,
      title: list?.note?.title,
      category: list?.note?.category[0].name,
      author: list?.note?.created_by?.profile?.full_name ? list?.note?.created_by?.profile?.full_name : "N/A",
      date: list?.user?.date_joined
        ? moment(list?.user?.date_joined).format("DD-MM-YYYY")
        : "N/A",
      action: (
        <ViewLinks linksto={`/ReaderDashboard/Notes/${list?.note?.id}`} />
      ),
    })
  );

  return (
    <CustomeTable columns={columns} hover={true} striped={true} data={data} offset={offset} setOffset={setOffset} limit={limit} setLimit={setLimit} page={page} setPage={setPage} listDatas={readerListData} sn={sn} setSn={setSn} />
  );
};

export default Readerlist;
