import { useEffect, useState } from "react";

// Import Worker
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import {
  Viewer,
  DocumentLoadEvent,
  PageChangeEvent,
} from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PDFComponent(props) {
  const { file } = props;
  console.log(file, "file url");
  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile] = useState(file);

  // pdf file error state
  const [pdfError, setPdfError] = useState("");

  useEffect(() => {
    setPdfFile(file ? file : "");
  }, [file]);
  // handle file onChange event
  const allowedFiles = ["application/pdf"];
  // const handleFile = (e) => {
  //   let selectedFile = e.target.files[0];
  //   // console.log(selectedFile.type);
  //   if (selectedFile) {
  //     if (selectedFile && allowedFiles.includes(selectedFile.type)) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(selectedFile);
  //       reader.onloadend = (e) => {
  //         setPdfError("");
  //         setPdfFile(e.target.result);
  //       };
  //     } else {
  //       setPdfError("Not a valid pdf: Please select only PDF");
  //       setPdfFile("");
  //     }
  //   } else {
  //     console.log("please select a PDF");
  //   }
  // };
  const handleDocumentLoad = (e) => {
    console.log(e.doc.numPages, "document....");
  };

  const handlePageChange = (e) => {
    console.log("current page", e.currentPage);
  };

  return (
    <div className="container">
      {/* Upload PDF */}
      {/* <form>
        <label>
          <h5>Upload PDF</h5>
        </label>
        <br></br>

        <input
          type="file"
          className="form-control"
          onChange={handleFile}
        ></input>

        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form> */}

      {/* View PDF */}
      {/* <h5>View PDF</h5> */}
      <div className="viewer w-[800px]">
        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
              onDocumentLoad={handleDocumentLoad}
              onPageChange={handlePageChange}
            ></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile && <>No file is selected yet</>}
      </div>
    </div>
  );
}

export default PDFComponent;
