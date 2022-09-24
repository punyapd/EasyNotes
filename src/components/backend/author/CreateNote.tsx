import React, { useEffect, useState } from "react";
import Eye from "../svg icons/Eye";
import Submit from "../svg icons/Submit";
import NoteDescriptionField from "./NoteDescriptionField";
import SetPreviewPageComponent from "./SetPreviewPageComponent";
import Link from "next/link";
import CustomInpuField from "../../reusable/formikComponent/CustomInpuField";
import { Form, Formik } from "formik";
import DragNDrop from "../../../components/backend/DragNDrop";
import CustomDropDown from "../author/FormikComponents/CustomDropDown";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";
import Edit from "../svg icons/Edit";
import ViewNote from "../../../components/backend/notes/ViewNotes";
import PDFComponent from "../../PDFComponent";

type Props = {
  createNoteHandler: any;
  setFileName: any;
  fileName: any;
};

const CreateNote = (props: Props) => {
  const { createNoteHandler, setFileName, fileName } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(false);
  const [file, setFile] = useState("");


  const createNoteFormInitialValue = {
    user: null,
    title: "",
    category: [],
    attachment: null,
    image: null,
    description: "",
    is_visible: false,
    page: "",
    price: null,
  };
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

  return (
    <div className="w-full bg-white h-full overflow-x-scroll text-white font-Inter font-medium  p-4 rounded-lg">
      <Formik
        initialValues={createNoteFormInitialValue}
        // validationSchema={Signin_formValidation}
        onSubmit={(data, props) => createNoteHandler(data, props)}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="bg-theme p-3 rounded-t-[5px] flex items-center w-full flex-row ">
              <div className="w-full hidden md:flex justify-between items-center lg:flex justify-between items-center">
                <div>
                  <p> Create your note</p>
                </div>
                <div className="flex ml-4">
                  <button onClick={() => setView(true)}>
                    <div className="flex cursor-pointer items-center">
                      <Eye />
                      <span>View Note</span>
                    </div>
                  </button>
                  <button className="flex items-center ml-4" type="submit">
                    <Submit />
                    <span>Submit</span>
                  </button>
                </div>
              </div>

              <div className="block lg:hidden md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 xs:h-10 xs:w-10"
                  onClick={() => setIsOpen(!isOpen)}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>

            {isOpen && (
              <div className="flex relative items-center justify-center space-x-5 bg-theme flex-col">
                <div>
                  <p>Create your note</p>
                </div>
                <hr className="w-full mt-4" />
                <div className="flex items-center mt-4 mb-4">
                  <Link href="createnoteview">
                    <div className="flex cursor-pointer items-center">
                      <Eye />
                      <span>View Note</span>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center mt-4 mb-4">
                  <button className="flex items-center ml-4" type="submit">
                    <Submit />
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            )}
            {view ? (
              <div>
                <div className="w-full hidden md:flex justify-between items-center lg:flex justify-between items-center">
                  <div>
                    <p> Create your note</p>
                  </div>
                  <div className="flex ml-4">
                    <button>
                      <div className="flex cursor-pointer items-center">
                        <Eye />
                        <span>View Note</span>
                      </div>
                    </button>
                    <button className="flex items-center ml-4">
                      <Submit />
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
                <div className="p-4 h-full h-[1000px] bg-white rounded-lg font-Inter text-[15px] overflow-scroll ">
                  <PDFComponent file={file} showToolBar={true} />
                </div>
              </div>
            ) : (
              <>
                <div className="sm:grid grid-cols-1 md:grid  grid-cols-2  lg:grid-cols-4 items-center justify-around text-[#323232] font-Inter font-normal py-6 gap-6">
                  <CustomInpuField
                    type={"text"}
                    fieldname="Enter note title"
                    label={"Note Title"}
                    name={"title"}
                  />
                  <CustomDropDown
                    name={"category"}
                    options={options}
                    label={"Category"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname="Enter price of note"
                    label={"Price of note"}
                    name={"price"}
                  />
                  <CustomInpuField
                    type={"text"}
                    fieldname="Duration of Notes"
                    label={"Duration of note"}
                    name={"test"}
                  />
                </div>
                <div className="grid  sm:grid-cols-3 gap-6">
                  <div className="col-span-3 md:col-span-2 ">
                    <DragNDrop
                      setFieldValue={setFieldValue}
                      fieldName={"attachment"}
                      setFileName={setFileName}
                      fileName={fileName}
                      setFile={setFile}
                    />
                  </div>
                  <div className="col-span-3 md:col-span-1">
                    <SetPreviewPageComponent
                      type={"number"}
                      fieldname="Page"
                      label={"Page Title"}
                      name={"page"}
                    />
                  </div>
                </div>
                <div className="sm:grid grid-cols-12 text-[18px] md:grid justify-between text-[12px] my-5 grid-cols-12 gap-x-3 lg:grid text-3xl justify-between my-5 grid-cols-12 gap-x-3">
                  <NoteDescriptionField
                    type={"text"}
                    fieldname="Type Descriptions"
                    label={"Description"}
                    name={"description"}
                    title={"Note Description"}
                    row_height={6}
                  />

                  <NoteDescriptionField
                    type={"text"}
                    fieldname="Type Descriptions"
                    label={"Description"}
                    name={"description"}
                    title={"Topic Covered in Notes"}
                    row_height={6}
                  />
                  <NoteDescriptionField
                    type={"text"}
                    fieldname="Type Descriptions"
                    label={"Description"}
                    name={"description"}
                    title={"Benefit of Reading Notes"}
                    row_height={6}
                  />
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CreateNote;
