import { setMaxListeners } from "events";
import React from "react";
import AuthorDropdown from "../dropdown/AuthorDropdown";
import Link from "next/link";
import Category from "../dropdown/Category";

const lists = [
  {
    sno: "1",
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    sno: "2",
    title: "Social Note",
    category: "Social",
    author: "Ranvir Kapor",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
  {
    title: "Physics Note",
    category: "Science",
    author: "John Deo",
    readers: "200",
    date: "20 jul, 2020",
    status: "active",
  },
];
export default function Notes() {
  return (
    <div className=" relative p-4 h-full w-[100%] bg-white rounded-lg ">
      <div className="flex justify-between items-start">
        <h2 className="font-Inter text-lg font-medium">Notes list</h2>
        <div className="flex space-x-5">
          <AuthorDropdown />
          {/* <Category /> */}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-y-auto">
              <table className="min-w-full">
                <thead className="border-b bg-theme  font-Jost font-light text-white text-[15px]">
                  <tr>
                    <th scope="col" className="  px-6 py-4 text-left">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-4 text-left">
                      Title
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Category
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Author
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Readers
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Date
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Status
                    </th>
                    <th scope="col" className=" px-6 py-4 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] font-Inter font-normal">
                  {lists.map((list: any, index: number) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.title}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.category}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.author}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.readers}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.date}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.status}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        <Link href="Notedetails">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 cursor-pointer opacity-50"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='h-[515px] w-full overflow-auto'>
                                                </div> */
}
