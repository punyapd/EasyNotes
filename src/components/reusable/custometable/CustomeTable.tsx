import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";

type Props = {
  data: any;
  columns: any;
  hover: any;
  striped: any;
  offset:any;
  setOffset:any;
  limit:any;
  setLimit:any;
  page?:any;
  setPage?:any;
  listDatas?:any;
  sn?:any;
  setSn?:any;

  
};
const CustomeTable = (props: Props) => {

  
  const { data, columns, offset, setOffset, limit, setLimit, page, setPage ,listDatas, sn, setSn} = props;

  const getCaps = (head: any, field: any) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <>
    <div className="p-4 h-screen w-full bg-white rounded-lg">
      <div className="flex flex-col ">
        <div className="overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-y-auto">
              <table className="min-w-full rounded-t-md">
                <thead className="border-b bg-theme rounded-t-md font-Jost font-light text-white text-[15px] ">
                  <tr>
                    {columns &&
                      columns.map((head: any, index: any) => (
                        <th
                          key={index}
                          scope="col"
                          className="  px-6 py-4 text-left"
                        >
                          {getCaps(head.header, head.field)}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="text-[15px] font-Inter font-normal">
                  {/* {Array.isArray(filteredData)
                  ? filteredData && filteredData?.map((col: any, index: any) => (
                    <td
                    key={index}
                    className=" px-6 py-4 whitespace-nowrap font-Inter"
                  >
                    {row[col.field]}
                  </td> */}

                  {data &&
                    data.map((row: any, index: any) => (
                      <tr key={index} className="border-b">
                        {columns.map((col: any, index: any) => (
                          <td
                            key={index}
                            className=" px-6 py-4 whitespace-nowrap font-Inter"
                          >
                            {row[col.field]}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
              <Pagination limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} page={page} setPage={setPage} listDatas={listDatas} sn={sn} setSn={setSn} />


            </div>
           
            
          </div>
          
        </div>
        
      </div>

    </div>

    </>
  );
};

export default CustomeTable;
