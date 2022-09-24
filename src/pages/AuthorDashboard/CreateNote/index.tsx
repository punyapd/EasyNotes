import React, { useState } from "react";
import APIS from "../../../helpers/EndPoints";
import CreateNote from "../../../components/backend/author/CreateNote";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postApiData } from "../../../helpers/AxiosInstances";
import useGetHook from "../../../hooks/useGetHooks";

const CreateNotes = () => {
  const [fileName, setFileName] = useState(null);
  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserData",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });

  const createNoteHandler = async (data: any, formikProps: any) => {
    const formData = new FormData();

    formData.append("user", `${currentUserData?.id}`);
    formData.append("title", `${data.title}`);
    formData.append("category", `${data.category}`);
    formData.append("attachment", data.attachment);
    formData.append("image", data?.image ? data.image : "");
    formData.append("description", `${data.description}`);
    formData.append("is_visible", `${data.is_visible}`);
    formData.append("page", `${data.page}`);
    formData.append("price", `${data.price}`);

    const url = APIS.NOTES;
    const response = await postApiData({ url, formData, formikProps });

    if (response.status === 200 || response.status === 201) {
      toast.success("Note Published Successfully");
    } else {
      toast.error(response?.data);
    }
  };

  return (
    <>
      <CreateNote
        createNoteHandler={createNoteHandler}
        setFileName={setFileName}
        fileName={fileName}
      />
    </>
  );
};
export default CreateNotes;
