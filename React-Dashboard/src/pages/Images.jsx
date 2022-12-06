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
      const response = await axiosInstance.get("/api/image/uploads/:image", {});
      if (response.data.success) {
        console.log(response.data.data);
        const mappedData = response.data.data.map((images) => {
          return {
            ...images,
            key: images._id,
          };
        });
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
      dataIndex: "name_image",
      key: "name_image",
    },

    {
      title: "Images",
      dataIndex: ["image"],
      render: (image) => (
        <img
          src={`http://localhost:5000/api/image/${image}`}
          alt="image"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      ),
      key: "image",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <button
            className="underline text-base text-green-500 cursor-pointer hover:text-green-700"
            onClick={() => {
              // setSelectedCar(record);
            }}
          >
            View
          </button>
          <button
            className="underline text-base text-red-500 cursor-pointer hover:text-red-700"
            onClick={() => {
              // CancelBooking();
            }}
          >
            Cancel
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
          setShowImagesForm={setShowImagesForm}
          type={selectedImages ? "edit" : "add"}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          getData={getImages}
        />
      )}
    </div>
  );
}

export default Images;
