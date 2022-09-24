import { useRouter } from "next/router";
import React from "react";
import AuthorNotedescription from "../../../../components/backend/author/AuthorNotedescription";
import NotedetailEdit from "../../../../components/backend/author/Mynotes/NotedetailEdit";
import NoteDetails from "../../../../components/frontend/exam/NoteDetails";
import LoadingSpinner from "../../../../components/reusable/loadingspinner/Spinner";
import APIS from "../../../../helpers/EndPoints";
import useGetHook from "../../../../hooks/useGetHooks";
import { patchApiData } from "../../../../helpers/AxiosInstances";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const EdityourDetails = (props: Props) => {
  const router = useRouter();
  const { noteID } = router.query;

  const { isLoading: editListLoading, data: notesDetails } = useGetHook({
    queryKey: "author",
    url: `${APIS.NOTES}${noteID}`,
    parma: "",
    auth: true,
  });

  const noteDetailUpdateHandler = async (values: any, formikProps: any) => {
    const url = `${APIS.NOTES}${notesDetails?.id}/`;
    const formData = new FormData();

    formData.append("user", `${values.id}`);
    formData.append("title", `${values.title}`);
    formData.append("category", `${values.category}`);
    formData.append("description", `${values.description}`);
    formData.append("price", `${values.price}`);
    try {
      const response = await patchApiData({ url, formData });
      if (response.status === 200) {
        toast.success("Update Success");
      } else {
        toast.error(response?.data);
        formikProps.setErrors(response.data.errors);
      }
    } catch (e) {
      console.log(e);
    }
    formikProps.setSubmitting(false);
  };

  return (
    <>
      <ToastContainer />
      {editListLoading ? (
        <LoadingSpinner />
      ) : (
        <NotedetailEdit
          notesDetails={notesDetails}
          noteDetailUpdateHandler={noteDetailUpdateHandler}
        />
      )}
    </>
  );
};

export default EdityourDetails;
