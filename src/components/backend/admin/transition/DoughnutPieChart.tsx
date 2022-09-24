import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Tooltip, Title, ArcElement, Legend } from "chart.js";



type Props = {

  leftData:any;
  rightData:any;
};



const DoughnutPieChart = (props: Props) => {
  const { rightData, leftData } = props;
  
  
  
  
  return (
    <div>
      <div className="bg-theme row-span-1 rounded-t-md p-4 mx-4 text-md font-medium text-white">
        <p className=" ">Related Exams</p>
      </div>
      <div className="grid md:grid-cols-2 text-center sm:grid-cols-1">
        <div className="border border-gray mx-4 h-[100%] mt-4 grid grid-cols-2">
          <div>
            <Doughnut data={leftData} />
          </div>
        </div>
        <div className="border border-gray mx-4 h-[100%] mt-4 grid grid-cols-2">
          <div>
            <Doughnut data={rightData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutPieChart;
