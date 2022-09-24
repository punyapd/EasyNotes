import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import DoughnutPieChart from '../../../../components/backend/admin/transition/DoughnutPieChart'
import CustomeTable from '../../../../components/reusable/custometable/CustomeTable'
import ViewLinks from '../../../../components/reusable/customLink/ViewLinks'
import LoadingSpinner from '../../../../components/reusable/loadingspinner/Spinner'
import APIS from '../../../../helpers/EndPoints'
import useGetHook from '../../../../hooks/useGetHooks'
import Spinner from "../../../../components/reusable/loadingspinner/Spinner"
import AuthorSinlgeNote from '../authorSingleNote/[AuthorSingleNote]'

const columns = [
    { field: "sn", header: "S.NO" },
    { field: "titleofnote", header: "Title Of Note" },
    { field: "totalrevenue", header: "Total Revenue" },
    { field: "comission", header: "Comission" },
    { field: "authorrevenue", header: "Author Revenue" },
    { field: "subscription", header: "Subscription" },
    { field: "action", header: "Action" },
  ];

type Props = {}

const AuthorStatistics = (props: Props) => {
    const router = useRouter()
    const {AuthorStatistics} = router.query;
    

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    
    const { isLoading: authorStatisticsDataLoading, data: authorStatisticsData } =
    useGetHook({
      queryKey: `${APIS.NOTES}?user=${AuthorStatistics}`,
      url: `${APIS.NOTES}?user=${AuthorStatistics}`,
      parma: "",
      auth: true,
    });


    const { isLoading: allAuthorListDatasLoading, data: allAuthorListDatas } =
    useGetHook({
      queryKey: 'allAuthorListDatas',
      url: APIS.NOTES,
      parma: "",
      auth: true,
    });

  let data: any = [];



  authorStatisticsDataLoading
  ? <Spinner />
  :  (authorStatisticsData && authorStatisticsData?.map((list: any, index: any) =>
          data.push({
            sn: index + 1,
            titleofnote: list?.title,
            totalrevenue: list?.total_revenue,
            comission: list.total_commission,
            authorrevenue: list?.total_revenue,
            subscription: moment(list.user.date_joined).format("DD-MM-YYYY"),
            action: <ViewLinks linksto={`/Dashboard/Transitions/authorSingleNote/${list?.user?.id}`} />,
          })
        ))


  var total_revenue_datas:any = []
  var total_active_note = 0;
  var total_note = 0;
  var total_commission:any  = [];

  var a = authorStatisticsData?.map((item:any, index:any)=>{
    total_revenue_datas.push(item.total_revenue)
    total_commission.push(item.total_commission)
    total_note++;
    if (item.created_by.is_active){
      total_active_note++;
    }
  })


  var totalrevenue:number = 0;
  var totalCommission:number = 0;

  for(var i=0; i<total_revenue_datas.length; i++){
    totalrevenue = totalrevenue + parseInt(total_revenue_datas[i]);
  }

  for(var i=0; i<total_commission.length; i++){
    totalCommission = totalCommission + parseInt(total_commission[i]);
  }




  const datas = {
    datasets: [
      {
        data: [totalrevenue, totalCommission],
        backgroundColor: ["#FF407B", "#FFC750", "#EEF1F8"],
      },
    ],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Revenue", "Comission", "Other"],
  };

  const total_activenotes_data = {
    datasets: [
      {
        data: [total_note, total_active_note],
        backgroundColor: ["#25D5F2", "#BB2BFF", "#5969FF"],
      },
    ],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Notes", "Active Notes", "Expired Notes"],
  };

  return (
    <>
    <div>
       <DoughnutPieChart  leftData={datas} rightData={total_activenotes_data} />
    </div>
    <div>
        {authorStatisticsDataLoading ? (
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
        
        />
      )}
    </div>
    </>
  )
}

export default AuthorStatistics;