import React, { useState } from "react";
import Link from "next/link";
import Save from "../../svg icons/Save";
import Eye from "../../svg icons/Eye";
import CustomeInput from "../../../reusable/input/CustomeInput";
import AuthorNotedescription from "../AuthorNotedescription";
import { Form, Formik } from "formik";
import CustomInpuField from "../../../reusable/formikComponent/CustomInpuField";
import NoteDescriptionField from "../NoteDescriptionField";
import APIS from "../../../../helpers/EndPoints";
import useGetHook from "../../../../hooks/useGetHooks";
import CustomDropDown from "../../author/FormikComponents/CustomDropDown";
import Menu from "../../svg icons/Menu";

type Props = {
  notesDetails: any;
  noteDetailUpdateHandler: any;
};

const NotedetailEdit = (props: Props) => {
  const { notesDetails, noteDetailUpdateHandler } = props;
  const [isOpen, setIsOpen] = useState(false);


  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: "categoryData",
    url: APIS.CATEGORY,
    parma: "",
    auth: true,
  });

  let options: any = [{ id: 0, name: "Choose Category" }];

  Array.isArray(categoryListData)
    ? categoryListData?.map((item: any, index: any) =>
        options.push({ id: item.id, name: item.name })
      )
    : null;

  const noteDetailsInitialsvalues = {
    id: notesDetails?.id,
    title: notesDetails?.title,
    // category: notesDetails?.category[0].name,
    category: null,
    description: notesDetails?.description,
    price: notesDetails?.price,
  };


  return (
    <div>
      {
        <Formik
          initialValues={noteDetailsInitialsvalues}
          // validationSchema={noteDetail_formValidation}
          onSubmit={(data, props) => noteDetailUpdateHandler(data, props)}
        >
          {({}) => (
            <Form>
              <div className="bg-theme  w-full p-3 rounded-t-[5px] flex items-center justify-between text-white">
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <Menu />
                </div>
                <div className=" hidden  md:flex items-center justify-between  ">
                  <Link href="Authors">
                    <h2 className="text-[#F0F0F0]">My Notes</h2>
                  </Link>
                  <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
                  <Link href="Notedetails">
                    <span>Note details</span>
                  </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                  <button
                    className="flex items-center cursor-pointer"
                    type="submit"
                  >
                    <Save />
                    <p>Save details</p>
                  </button>

                  <button className="flex items-center cursor-pointer">
                    <Eye />
                    <p>View Note</p>
                  </button>
                </div>
              </div>
              {!isOpen ? (
                <div className="flex-col bg-theme pl-5 text-white  md:hidden space-y-2 py-2">
                  <button
                    className="flex items-center cursor-pointer"
                    type="submit"
                  >
                    <Save />
                    <p>Save details</p>
                  </button>
                  <button className="flex items-center cursor-pointer">
                    <Eye />
                    <p>View Note</p>
                  </button>
                </div>
              ) : (
                <div className="hidden"></div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full p-4 dashboard-border font-Inter font-normal text-[#263238] gap-4  ">
                <div className=" pb-2">
                  <CustomInpuField
                    type={"text"}
                    fieldname="Enter note title"
                    label={"Note Title"}
                    name={"title"}
                  />
                </div>
                <div className=" pb-2">
                  <CustomDropDown
                    name={"category"}
                    options={options}
                    label={"Category"}
                  />
                  {/* <CustomInpuField
                    type={"text"}
                    fieldname="Category"
                    label={"Category"}
                    name={"category"}
                  /> */}
                </div>
                <div className=" pb-2">
                  <CustomInpuField
                    type={"text"}
                    fieldname="Price"
                    label={"Price"}
                    name={"price"}
                  />
                </div>
                <div className=" pb-2">
                  <CustomeInput
                    title={"Duration of time"}
                    placeholder={"Science"}
                    type={"text"}
                    value={"N/A"}
                  />
                </div>
              </div>
              <NoteDescriptionField
                type={"text"}
                fieldname="Type Descriptions"
                label={"Description"}
                name={"description"}
                title={"Note Description"}
                row_height={15}
              />
              {/* <AuthorNotedescription
                authorDetailsDescription={notesDetails?.description}
              /> */}
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

export default NotedetailEdit;
