import moment from "moment";
import React from "react";
import CustomeTable from "../../../reusable/custometable/CustomeTable";
import ViewLinks from "../../../reusable/customLink/ViewLinks";
import LoadingSpinner from "../../../reusable/loadingspinner/Spinner";
import DoughnutPieChart from "./DoughnutPieChart";

type Props = {
  authorListDatas: any;
  authorListLoading:any;
  offset:any;
  setOffset:any;
  limit:any;
  setLimit:any;
  page:any;
  setPage:any;
  allAuthorListDatas:any;
  authorsList?:any;
  readerList?:any;
  allAuthorTotalDatas:any;
};

const columns = [
    { field: "sn", header: "S.NO" },
    { field: "authorname", header: "Author Name" },
    { field: "notepublished", header: "Note Published" },
    { field: "noteactive", header: "Note Active" },
    { field: "sales", header: "Sales" },
    { field: "reveneu", header: "Reveneu" },
    { field: "action", header: "Action" },
  ];

const Transition = (props: Props) => {
  const { authorListDatas,authorListLoading, offset, setOffset, limit, setLimit, page, setPage,allAuthorListDatas, authorsList, readerList, allAuthorTotalDatas } = props;


  var data: any = [];

  authorListDatas?.results?.map((list: any, index: any) =>
    data.push({
      sn: index + 1,
      authorname: list?.created_by?.username,
      notepublished: moment(list?.created_by?.date_joined).format("DD-MM-YYYY"),
      noteactive: list?.is_visible,
      sales: list?.total_enrolled_students,
      reveneu: list?.total_enrolled_students * list?.price,
      action: <ViewLinks linksto={`Transitions/authorStatistics/${list?.user?.id}`} />,
    })
  );


  var total_revenue_datas:any = []
  var total_active_note = 0;
  var total_note = 0;
  var total_commission:any = []
  var total_expired_note:any = []

  var a = allAuthorListDatas?.map((item:any, index:any)=>{
    total_revenue_datas.push(item.total_revenue)
    total_commission.push(item.total_commission)
    total_expired_note.push(item.expired_notes)

    
    total_note++;
    if (item.created_by.is_active){
      total_active_note++;
    }
  })


  var totalrevenue:number = 0;
  var totalcomission:number = 0;
  var totalExpired:number = 0;

  for(var i=0; i<total_revenue_datas.length; i++){
    totalrevenue = totalrevenue + parseInt(total_revenue_datas[i]);
  }

  for(var i=0; i<total_commission.length; i++){
    totalcomission = totalcomission + parseInt(total_commission[i]);
  }

  for(var i=0; i<total_expired_note.length; i++){
    totalExpired = totalExpired + parseInt(total_expired_note[i]);
  }


  const datas = {
    datasets: [
      {
        data: [totalrevenue, totalcomission],
        backgroundColor: ["#FF407B", "#FFC750"],
      },
    ],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Revenue", "Comission"],
  };

  const total_activenotes_data = {
    datasets: [
      {
        data: [total_note, total_active_note, totalExpired],
        backgroundColor: ["#25D5F2", "#BB2BFF", "#5969FF"],
      },
    ],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Notes", "Total Active Notes", "Expired Notes"],
  };

  return (
    <div>
      <DoughnutPieChart leftData={datas} rightData={total_activenotes_data}/>

      <div className="grid md:grid-cols-3 mx-4 gap-8 mt-8 sm:grid-cols-1">
         <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Author Statics</h1>
          <div>
            <ul className="list-disc">
              <li>Total Author  : <span>{allAuthorTotalDatas?.total_author}</span></li> 
              <li>Publication &nbsp; &nbsp; : <span>{allAuthorTotalDatas?.publication}</span></li> 
            </ul>
          </div>
         </div>
         
         <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Reader Statics</h1>
          <div>
            <ul className="list-disc">
              <li>Total Reader &nbsp; &nbsp;  : <span>{allAuthorTotalDatas?.total_readers}</span></li> 
              <li>Reader Subscribed &nbsp; &nbsp; : <span>{allAuthorTotalDatas?.total_subscribed}</span></li> 
            </ul>
          </div>
         </div>

         <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Sales Statics</h1>
          <div>
            <ul className="list-disc">
              <li>Sales of the Month &nbsp; &nbsp;  : <span>{allAuthorTotalDatas?.monthly_sales} Notes</span></li> 
              <li>Sales of the year &nbsp; &nbsp; : <span>{allAuthorTotalDatas?.yearly_sales} Notes</span></li> 
            </ul>
          </div>
         </div>
      </div>

      {authorListLoading ? (
        <LoadingSpinner />
      ) : (
        <CustomeTable
          data={data}
          columns={columns}
          hover={true}
          striped={true}
          offset={offset}
          setOffset={setOffset}
          limit={limit}
          setLimit={setLimit}
          page={page}
          setPage={setPage}
          listDatas={authorListDatas}
        />
      )}
    </div>
  );
};

export default Transition;
