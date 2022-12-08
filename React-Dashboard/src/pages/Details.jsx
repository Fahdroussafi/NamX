import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { message, Table } from "antd";
import DetailsForm from "../components/Forms/DetailsForm";

function Details() {
  const [details, setDetails] = useState([]);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const getDetails = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/details/get-all-details",
        {}
      );
      if (response.data.success) {
        const mappedData = response.data.data.map((details) => {
          return {
            ...details,
            key: details._id,
          };
        });
        setDetails(mappedData);
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
      title: "Details Name",
      dataIndex: "details",
      render: (details) =>
        details.map((detail) => detail.details_name).join(", "),
      key: "details",
    },

    {
      title: "Details Description",
      dataIndex: "details",
      render: (details) =>
        details.map((detail) => detail.details_description).join(", "),
      key: "details_description",
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
    getDetails();
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
          onClick={() => setShowDetailsForm(true)}
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
            Add Details
          </span>
          <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
        </button>
      </div>
      <Table
        dataSource={details}
        columns={columns}
        pagination={{ pageSize: 5 }}
        loading={details.length === 0}
      />
      {showDetailsForm && (
        <DetailsForm
          showDetailsForm={showDetailsForm}
          setShowDetailsForm={setShowDetailsForm}
          type={selectedDetails ? "edit" : "add"}
          selectedDetails={selectedDetails}
          setSelectedDetails={setSelectedDetails}
          getData={getDetails}
        />
      )}
    </div>
  );
}

export default Details;
