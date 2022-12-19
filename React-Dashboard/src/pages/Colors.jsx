import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { message, Table } from "antd";
import ColorsForm from "../components/Forms/ColorsForm";

function Colors() {
  const [colors, setColors] = useState([]);
  const [showColorForm, setShowColorForm] = useState(false);

  const getColors = async () => {
    try {
      const response = await axiosInstance.get("/api/color/get-all-colors", {});
      if (response.data.success) {
        const mappedData = response.data.data.map((colors) => {
          return {
            ...colors,
            key: colors._id,
          };
        });
        setColors(mappedData);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const deleteColor = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/api/color/delete-color/${id}`,
        {}
      );
      if (response.data.success) {
        message.success(response.data.message);
        getColors();
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
      title: "Color Name",
      dataIndex: "color_name",
      key: "color_name",
    },

    {
      title: "Color Code",
      dataIndex: "color_code",
      render: (color_code) => (
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: color_code,
            border: "0.5px #000 solid",
          }}
        ></div>
      ),
      key: "color_code",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              deleteColor(record._id);
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
    getColors();
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between p-7">
        <button
          type="submit"
          className="relative inline-flex items-center justify-start
                px-10 py-3 overflow-hidden font-bold rounded-full
                group"
          onClick={() => setShowColorForm(true)}
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
            Add Colors
          </span>
          <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
        </button>
      </div>
      <Table
        dataSource={colors}
        columns={columns}
        pagination={{ pageSize: 5 }}
        loading={colors.length === 0}
      />
      {showColorForm && (
        <ColorsForm
          showColorForm={showColorForm}
          setShowColorForm={setShowColorForm}
          getData={getColors}
        />
      )}
    </div>
  );
}

export default Colors;
