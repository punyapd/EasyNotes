import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  types: any;
  message: any;
  show: any;
};
const ToastNotification = (props: Props) => {
  const { types, message, show } = props;
  show === true
    ? types === "success"
      ? toast.success(`${message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.error(`${message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    : "";

  return (
    <>
      <ToastContainer />
    </>
  );
};
export default ToastNotification;
