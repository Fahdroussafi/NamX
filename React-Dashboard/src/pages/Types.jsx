import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { message, Table } from "antd";
import TypesForm from "../components/Forms/TypesForm";

function Types() {
  const [types, setTypes] = useState([]);
  const [showTypesForm, setShowTypesForm] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(null);

  const getTypes = async () => {
    try {
      const response = await axiosInstance.get("/api/type/get-all-types", {});
      if (response.data.success) {
        const mappedData = response.data.data.map((types) => {
          return {
            ...types,
            key: types._id,
          };
        });
        setTypes(mappedData);
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
      title: "Type Name",
      dataIndex: "type_name",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
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
          <div className="flex gap-2">
            <button
              onClick={() => {
             // show the current types in the form 
                setSelectedTypes(record);
                setShowTypesForm(true);
              }}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 21v-9a1 1 0 011-1h6a1 1 0 011 1v9m-4-4h.01M15 7a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              View
            </button>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getTypes();
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
          onClick={() => setShowTypesForm(true)}
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
            Add Types
          </span>
          <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
        </button>
      </div>
      <Table
        dataSource={types}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
      {showTypesForm && (
        <TypesForm
          showTypesForm={showTypesForm}
          setShowTypesForm={setShowTypesForm}
          type={selectedTypes ? "edit" : "add"}
          selectedTypes={selectedTypes}
          // setSelectedTypes={setSelectedTypes}
          getData={getTypes}
        />
      )}
    </div>
  );
}

export default Types;
