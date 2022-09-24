import React, { useEffect, useState } from "react";
import {
  Viewer,
  RenderPageProps,
  Icon,
  MinimalButton,
  Position,
  Tooltip,
} from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { RenderZoomInProps, RenderZoomOutProps } from "@react-pdf-viewer/zoom";
import { RenderEnterFullScreenProps } from "@react-pdf-viewer/full-screen";
import { RenderGoToPageProps } from "@react-pdf-viewer/page-navigation";

interface DisableTextSelectionExampleProps {
  file: string;
  showToolBar: any;
}

const PDFComponent: React.FC<DisableTextSelectionExampleProps> = ({ file, showToolBar }) => {
  const [pdfFile, setPdfFile] = useState("");
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  useEffect(() => {
    setPdfFile(file ? file : "");
  }, [file]);

  const renderPage = (props: RenderPageProps) => {
    return (
      <>
        {props.canvasLayer.children}
        <div style={{ userSelect: "none" }}>{props.textLayer.children}</div>
        {props.annotationLayer.children}
      </>
    );
  };

  return (
    <div
      className="rpv-core__viewer"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#1BA8B1",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: showToolBar ? "flex" : "none",
          padding: "4px",
        }}
      >
        <Toolbar>
          {(props: ToolbarSlot) => {
            const {
              EnterFullScreen,
              Zoom,
              ZoomIn,
              ZoomOut,
              GoToNextPage,
              GoToPreviousPage,
            } = props;
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                <div style={{ padding: "0px 15px" }}>
                  <ZoomOut>
                    {(props: RenderZoomOutProps) => (
                      <div
                        className="flex items-center p-2 cursor-pointer text-white"
                        onClick={props.onClick}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                        Zoom in
                      </div>
                    )}
                  </ZoomOut>
                </div>
                {/* <div style={{ padding: "0px 2px" }}>
                  <Zoom />
                </div> */}
                <div style={{ padding: "0px 15px" }}>
                  <ZoomIn>
                    {(props: RenderZoomInProps) => (
                      <div
                        className="flex items-center p-2 cursor-pointer text-white"
                        onClick={props.onClick}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                          />
                        </svg>
                        Zoom out
                      </div>
                    )}
                  </ZoomIn>
                </div>

                <div style={{ padding: "0px 15px" }}>
                  <EnterFullScreen>
                    {(props: RenderEnterFullScreenProps) => (
                      <div
                        className="flex items-center space-x-2 p-2 cursor-pointer text-white"
                        onClick={props.onClick}
                      >
                        <BsArrowsFullscreen />
                        <p>Full screen</p>
                      </div>
                    )}
                  </EnterFullScreen>
                </div>
                <div
                  style={{
                    left: 0,
                    position: "absolute",
                    top: "50%",
                    transform: "translate(24px, -50%)",
                    zIndex: 5,
                  }}
                >
                  <GoToPreviousPage>
                    {(props: RenderGoToPageProps) => (
                      <Tooltip
                        position={Position.BottomCenter}
                        target={
                          <MinimalButton onClick={props.onClick}>
                            <Icon size={26}>
                              <path d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5" />
                            </Icon>
                          </MinimalButton>
                        }
                        content={() => "Previous page"}
                        offset={{ left: 0, top: 8 }}
                      />
                    )}
                  </GoToPreviousPage>
                </div>
                <div
                  style={{
                    position: "absolute",
                    color: "red",
                    right: "1%",
                    top: "50%",
                    transform: "translate(-24px, -50%)",
                    zIndex: 5,
                  }}
                >
                  <GoToNextPage>
                    {(props: RenderGoToPageProps) => (
                      <Tooltip
                        position={Position.BottomCenter}
                        target={
                          <MinimalButton onClick={props.onClick}>
                            <Icon size={26}>
                              <path d="M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5" />
                            </Icon>
                          </MinimalButton>
                        }
                        content={() => "Next page"}
                        offset={{ left: 0, top: 8 }}
                      />
                    )}
                  </GoToNextPage>
                </div>
              </div>
            );
          }}
        </Toolbar>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              renderPage={renderPage}
              plugins={[toolbarPluginInstance]}
            />
            ;
          </Worker>
        )}
        {/* render this if we have pdfFile state null   */}
        {!pdfFile && <>Sorry no content found!</>}
      </div>
    </div>
  );
};

export default PDFComponent;
