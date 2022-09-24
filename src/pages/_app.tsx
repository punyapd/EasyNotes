import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Home from ".";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardLayout from "../Layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { AuthProvider } from "../components/AuthContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if (
    [
      `/Dashboard`,
      `/Dashboard/Notes`,
      `/Dashboard/Notes/NoteID/[noteID]`,
      `/ViewNotes`,
      `/Dashboard/Authors`,
      `/Dashboard/Authors/Authordetails/[authorID]`,
      `/Dashboard/Readers`,
      `/Dashboard/Readers/Readersdetails/[readerID]`,
      `/Dashboard/Transitions`,
      `/Dashboard/Transitions/authorStatistics/[AuthorStatistics]`,

      `/Dashboard/Transitions/authorSingleNote/[AuthorSingleNote]`,

      `/Dashboard/NoteSearch/[SearchInDashboard]`,

      // AuthorDashboard
      `/AuthorDashboard/CreateNote`,
      `/AuthorDashboard/MyAccount`,
      `/AuthorDashboard/Notes`,
      `/AuthorDashboard/edityourdetails`,
      `/AuthorDashboard/MyAccount/EditYourDetail/[authorID]`,
      `/AuthorDashboard/Notes/EdityourDetails/[noteID]`,
      `/AuthorDashboard/Notes/[noteID]`,
      `/AuthorDashboard/Notes/CreateNoteView/[noteID]`,
      `/AuthorDashboard/Transitions`,

      `/AuthorDashboard/NoteSearch/[SearchInAuthor]`,

      //ReaderDashboardTest
      `/ReaderDashboard/Notes`,
      `/ReaderDashboard/MyAccount`,
      `/ReaderDashboard/MyAccount/Editdetail`,
      `/ReaderDashboard/Notes/[readerID]`,
      `/ReaderDashboard/MyNote/Notedetails`,
      `/ReaderDashboard/Transitions`,

      `/ReaderDashboard/Notes/Notedetails/[noteID]`,


      `/ReaderDashboard/NoteSearch/[SearchInReaderDashboard]`


    ].includes(appProps.router.pathname)
  ) {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
          <ToastContainer autoClose={1500} />
        </AuthProvider>
      </QueryClientProvider>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer autoClose={1500} />
        </AuthProvider>
      </QueryClientProvider>
    );
  }
}

export default MyApp;
