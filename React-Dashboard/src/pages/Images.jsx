import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { message, Table } from "antd";
import ImagesForm from "../components/Forms/ImagesForm";

function Images() {
  const [images, setImages] = useState([]);
  const [showImagesForm, setShowImagesForm] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);

  const getImages = async () => {
    try {
      const response = await axiosInstance.get("/api/image/get-images", {});
      if (response.data.success) {
        // console.log(response.data.data);
        const mappedData = response.data.data.map((images) => {
          return {
            ...images,
            key: images._id,
          };
        });

        // setImages(response.data.data);
        setImages(mappedData);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Image Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Images",
      dataIndex: "img",
      render: (img) => (
        <img src={img} alt="image_img" className="w-64 h-full" />
      ),
      key: "image",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              // deleteColor(record._id);
            }}
            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between p-7">
        {/* <PageTitle title="Buses" /> */}
        <button
          type="submit"
          className="relative inline-flex items-center justify-start
                px-10 py-3 overflow-hidden font-bold rounded-full
                group"
          onClick={() => setShowImagesForm(true)}
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
            Add Images
          </span>
          <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
        </button>
      </div>
      <Table
        dataSource={images}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
      {showImagesForm && (
        <ImagesForm
          showImagesForm={showImagesForm}
          // setShowImagesForm={setShowImagesForm}
          // type={selectedImages ? "edit" : "add"}
          // selectedImages={selectedImages}
          // setSelectedImages={setSelectedImages}
          // getData={getImages}
        />
      )}
    </div>
  );
}

export default Images;
