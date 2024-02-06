import React, { useState } from "react";
import "./upload.css";
import Person from "../assets/person.svg";
import Vector from "../assets/Vector.svg";
import ExcelIcon from "../assets/excelicon.svg";
import Loading from "../assets/loading.svg";
import Subupload from "./Subupload";

function Upload() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const sampleData = [
    {
      siNo: 1,
      link: "www.google.com",
      prefix: "prefixsample",
      tags: [
        { id: "TAG 1", selected: true },
        { id: "TAG 2", selected: true },
        { id: "TAG 3", selected: false },
        { id: "TAG 4", selected: false },
        { id: "TAG 5", selected: false },
      ],
    },
    {
      siNo: 2,
      link: "www.google.com",
      prefix: "prefixsample",
      tags: [
        { id: "TAG 1", selected: true },
        { id: "TAG 2", selected: false },
        { id: "TAG 3", selected: false },
        { id: "TAG 4", selected: false },
        { id: "TAG 5", selected: false },
      ],
    },
    // ... more data
  ];

  const handleDragOver = (event) => {
    event.preventDefault();
    event.target.classList.add("drag-over");
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.target.classList.remove("drag-over");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.target.classList.remove("drag-over");
    setFile(event.dataTransfer.files[0]);
    setFileName(event.dataTransfer.files[0].name);
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };
  const handleRemove = (event) => {
    debugger;
    event.preventDefault();
    setFileName("");
    setFile(null);
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle file upload here
    const formData = new FormData();
    formData.append("file", file);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("File uploaded successfully", data);
      })
      .catch((error) => {
        console.error("Error uploading file", error);
      });
  };
  return (
    <>
      <div className="flex mt-2 justify-between">
        <h2 className="text-2xl font-semibold text-left font-figtree uppercase tracking-tight">
          Upload CSV
        </h2>
        <div className="flex items-center gap-6 sm:gap-2 md:gap-6 lg:gap-8 xl:gap-10 ">
          <img src={Vector} alt="Notification icon" className="mb-2" />
          <img src={Person} alt="Person icon" className="mb-2" />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-screen"
      >
        <div
          className="bg-white p-8 rounded-lg shadow-md"
          style={{
            width: "80vw",
            maxWidth: "596px",
            borderRadius: "8px",
          }}
        >
          <div className="mb-4 text-center">
            <label
              htmlFor="file-input"
              className="max-w-full max-h-full border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-gray-600 hover:text-gray-600 transition duration-300 cursor-pointer drag-and-drop"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <img src={ExcelIcon} alt="Excel icon" className="mb-2" />
              {fileName ? (
                <div onClick={handleRemove}>
                  <p
                    className="text-sm font-figtree "
                    onClick={() => setFileName("")}
                  >
                    {fileName}
                  </p>
                  <p className="text-red-700" onClick={() => setFileName("")}>
                    Remove
                  </p>
                </div>
              ) : (
                <p className="mb-2">
                  {" "}
                  Drop your excel sheet here or{" "}
                  <span className="custom-text-color hover:cursor-pointer">
                    browse
                  </span>{" "}
                </p>
              )}
            </label>
            <input
              type="file"
              accept=".csv"
              id="file-input"
              className="hidden"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
          >
            {fileName ? (
              <div className="flex items-center justify-center">
                <img src={Loading} alt="Loading" />
              </div>
            ) : (
              "Upload"
            )}
          </button>
        </div>
      </form>
      <Subupload data={sampleData} />
    </>
  );
}

export default Upload;
