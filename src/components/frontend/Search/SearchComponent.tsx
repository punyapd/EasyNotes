import React from "react";
// import Banner1 from '../../Reusable/Banner/Banner1';
import Card from "../../../components/frontend/main/Cards";

type Props = {
  searchKeyword: any;
  noteSearchLists: any;
};

const SearchComponent = (props: Props) => {
  const { noteSearchLists, searchKeyword } = props;
  return (
    <div>
      {/* <Banner1 title={'Search Exams'} catagory={'Exams'} /> */}
      <div className="mx-10">
        <div className="flex flex-row justify-center items-center pt-[6rem] p-5 font-Jost ">
          <div>
            <div className="flex flex-col space-y-8 ">
              <div className="mx-auto">
                <span className="lg:text-2xl text-center font-Jost font-bold text-dimDark">
                  Search Results on{" "}
                  <span className="text-Orange font-Jost font-bold">
                    {searchKeyword}
                  </span>
                </span>
              </div>
              <div className="mx-auto">
                <h3 className="text-center font-Inter text-dimDark font-[16px]">
                  You know our goal at Bookroo is to help you spend less time
                  searching for books so you can spend more time reading!
                </h3>
              </div>
              <div className="flex flex-row space-x-6 flex-wrap gap-y-4 justify-center">
                {noteSearchLists?.length === 0 ? (
                  <div className="text-center font-Jost font-bold text-2xl my-10">
                    <p>No results found!</p>
                  </div>
                ) : (
                  <div className="">
                    <div className="
                    grid gap-4 md:grid-cols-4 ">
                      {noteSearchLists &&
                        noteSearchLists?.map((item: any, index: any) => (
                          <Card key={index} item={item} />
                        ))}
                    </div>
                    <div className="flex items-center justify-center my-10  md:my-24 ">
                      <button className="blue-btn w-[155px]">More Notes</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
