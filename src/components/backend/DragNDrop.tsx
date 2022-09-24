import React, { useState, useRef } from "react";

type Props = {
  setFieldValue: any;
  fieldName:any;
  setFileName:any
  fileName:any;
  setFile:any;
};
const DragDropFile = (props: Props) => {
  const { setFieldValue, fieldName,setFileName,fileName, setFile } = props;
  const [dragActive, setDragActive] = useState(false);
//   const [fileName, setFileName] = useState(null);

  // ref
  const inputRef = useRef(null);

  function handleFile(files: any) {
    setFileName(files.name);
    setFile(files);
    setFieldValue(fieldName, files);
  }

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    // inputRef.current.click();
    console.log(inputRef.current, "inputref");
  };

  return (
    <form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div className=" rounded-lg w-full text-center">
          <div className="bg-theme p-3 rounded-t-[5px] w-full">
            <p>Upload your note</p>
          </div>
          <div
            className=" flex flex-col items-center justify-center text-themetext w-full h-[264px]"
            onClick={onButtonClick}
          >
            <p className=" text-[#ABABAB] text-center">
              Drag your image here <br /> or <br /> click to select your file
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p>{fileName}</p>
          </div>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};
export default DragDropFile;
