import React from "react";
import DoughnutPieChart from "../../../components/backend/admin/transition/DoughnutPieChart";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

type Props = {};

const Transitions = (props: Props) => {
  const { isLoading: authorDetailLoading, data: authorDetail } = useGetHook({
    queryKey: "authorDetail",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });

  const datas = {
    datasets: [
      {
        data: [
          authorDetail && authorDetail[0]?.total_revenue,
          authorDetail && authorDetail[0]?.total_commission,
        ],
        backgroundColor: ["#FF407B", "#FFC750"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Revenue", "Comission"],
  };

  const total_activenotes_data = {
    datasets: [
      {
        data: [
          authorDetail && authorDetail[0]?.active_notes,
          authorDetail && authorDetail[0]?.expired_notes,
        ],
        backgroundColor: ["#25D5F2", "#BB2BFF", "#5969FF"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Notes", "Total Active Notes", "Expired Notes"],
  };

  return (
    <div>
      <DoughnutPieChart leftData={datas} rightData={total_activenotes_data} />
      <div className="grid grid-cols-2 mx-4 gap-8 mt-8">
        <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Sales Statics</h1>
          <div>
            <ul className="list-disc">
              <li>
                Sales of the Month &nbsp; &nbsp; :{" "}
                <span>{authorDetail && authorDetail[0]?.monthly_sales} Notes</span>
              </li>
              <li>
                Sales of the Month &nbsp; &nbsp; :{" "}
                <span>{authorDetail && authorDetail[0]?.yearly_sales} Notes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Reader Statics</h1>
          <div>
            <ul className="list-disc">
              <li>
                Total Reader &nbsp; &nbsp; : <span>2</span>
              </li>
              <li>
                Reader Subscribed &nbsp; &nbsp; :{" "}
                <span>{authorDetail && authorDetail[0]?.total_enrolled_students}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
