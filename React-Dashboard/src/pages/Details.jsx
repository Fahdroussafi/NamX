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
      render: (details) => (
        <div>
          {details.map((detail, key) => (
            <div key={key}>{detail.details_name}</div>
          ))}
        </div>
      ),

      key: "details_name",
    },

    {
      title: "Details Description",
      dataIndex: "details",
      render: (details) => (
        <div>
          {details.map((detail, key) => (
            <div key={key}>{detail.details_description}</div>
          ))}
        </div>
      ),
      key: "details_description",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <button
            onClick={() => {}}
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
          <button
            onClick={() => {
              setSelectedDetails(record);
              setShowDetailsForm(true);
            }}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeLinecap="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Update
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
