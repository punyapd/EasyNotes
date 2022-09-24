import React from "react";
import DoughnutPieChart from "../../../components/backend/admin/transition/DoughnutPieChart";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

type Props = {};

const Transitions = (props: Props) => {
  const { isLoading: ReaderDetail, data: readerDetail } = useGetHook({
    queryKey: "readerDetail",
    url: APIS.ENROLL_PDF_NOTES,
    parma: "",
    auth: true,
  });

  const datas = {
    datasets: [
      {
        data: [readerDetail && readerDetail[0]?.total_expanses],
        backgroundColor: ["#FF407B"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total Expenses"],
  };

  const total_activenotes_data = {
    datasets: [
      {
        data: [
          readerDetail && readerDetail[0]?.note?.total_enrolled_students,
          readerDetail && readerDetail[0]?.note_subscribed,
        ],
        backgroundColor: ["#25D5F2", "#BB2BFF"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Notes Reads", "Notes Subscribed"],
  };

  return (
    <div>
      <DoughnutPieChart leftData={datas} rightData={total_activenotes_data} />
      <div className="grid md:grid-cols-2 mx-4 gap-8 mt-8 sm:grid-cols-1">
        <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Subscription Statics</h1>
          <div>
            <ul className="list-disc">
              <li>
                Purchase this month &nbsp; &nbsp; :{" "}
                <span>
                  {readerDetail && readerDetail[0]?.monthly_purchase} Notes
                </span>
              </li>
              <li>
                Purchase this year &nbsp; &nbsp; :{" "}
                <span>
                  {readerDetail && readerDetail[0]?.yearly_purchase} Notes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-gray p-4 px-8 text-sm tracking-wider">
          <h1 className="text-lg mb-2">Reads Statics</h1>
          <div>
            <ul className="list-disc">
              <li>
                Total Reads &nbsp; &nbsp; :{" "}
                <span>
                  {readerDetail &&
                    readerDetail[0]?.note?.total_enrolled_students}
                </span>
              </li>
              <li>
                Total Subscribed &nbsp; &nbsp; :{" "}
                <span>{readerDetail && readerDetail[0]?.note_subscribed}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
