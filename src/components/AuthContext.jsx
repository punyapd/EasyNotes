import React, { createContext, useContext, useMemo, useEffect } from "react";
// import { useCurrentUser } from "@/hooks/index";
import { useRouter } from "next/router";
// import UnAuthPage from "@/components/Layout/pages/unauth";
import useGetHook from "../hooks/useGetHooks";
import APIS from "../helpers/EndPoints";
import Signin from "../pages/Signin";

const AuthStateContext = createContext();

export function useAuth() {
  return useContext(AuthStateContext);
}

const AuthProvider = ({ children }) => {
  const router = useRouter();

  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserss",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });

  let role = "";
  let allowed = true;

  if (
    router.pathname.startsWith("/AuthorDashboard") &&
    !currentUserData?.is_note_teacher
  ) {
    allowed = false;
  }
  if (router.pathname.startsWith("/Dashboard") && !currentUserData?.is_staff) {
    allowed = false;
  }
  if (
    router.pathname.startsWith("/ReaderDashboard") &&
    !currentUserData?.is_note_student
  ) {
    allowed = false;
  }

  useEffect(() => {
    if (!currentUserLoading) {
      if (
        router.pathname.startsWith("/AuthorDashboard") &&
        !currentUserData?.is_note_teacher
      ) {
        if (currentUserData?.is_note_student) {
          router.push("/ReaderDashboard/Notes");
        } else if (currentUserData?.is_staff) {
          router.push("/Dashboard/Notes");
        }
      }
      if (
        router.pathname.startsWith("/Dashboard") &&
        !currentUserData?.is_staff
      ) {
        if (currentUserData?.is_note_student) {
          router.push("/ReaderDashboard/Notes");
        } else if (currentUserData?.is_note_teacher) {
          router.push("/AuthorDashboard/CreateNote");
        }
      }
      if (
        router.pathname.startsWith("/ReaderDashboard") &&
        !currentUserData?.is_note_student
      ) {
        if (currentUserData?.is_staff) {
          router.push("/Dashboard/Notes");
        } else if (currentUserData?.is_note_teacher) {
          router.push("/AuthorDashboard/CreateNote");
        }
      }
    }
  }, [currentUserData, router]);

  const contextValue = useMemo(() => [allowed, role], [allowed, role]);
  // const ComponentToRender = allowed ? children : UnAuthPage;
  const ComponentToRender = allowed ? children : <Signin />;

  return (
    <AuthStateContext.Provider value={contextValue}>
      {ComponentToRender}
    </AuthStateContext.Provider>
  );
};

export { AuthProvider };
