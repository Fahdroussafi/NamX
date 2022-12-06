import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { message, Table } from "antd";
import ColorsForm from "../components/Forms/ColorsForm";

function Colors() {
  const [colors, setColors] = useState([]);
  const [showColorForm, setShowColorForm] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

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
    getColors();
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
      />
      {showColorForm && (
        <ColorsForm
          showColorForm={showColorForm}
          setShowColorForm={setShowColorForm}
          type={selectedColor ? "edit" : "add"}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          getData={getColors}
        />
      )}
    </div>
  );
}

export default Colors;
