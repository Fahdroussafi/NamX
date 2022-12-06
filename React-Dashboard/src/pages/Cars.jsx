import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { message, Table } from "antd";
import CarForm from "../components/Forms/CarForm";

function Cars() {
  const [cars, setCars] = useState([]);

  const [showCarForm, setShowCarForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const getCars = async () => {
    try {
      const response = await axiosInstance.get("/api/car/get-all-cars", {});
      if (response.data.success) {
        // console.log(response.data.data);

        const mappedData = response.data.data.map((car) => {
          return {
            ...car,
            key: car._id,
            key: car.name_car,
            key: car.type_id.type_name,
          };
        });
        setCars(mappedData);
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
      title: "Car Name",
      dataIndex: "name_car",
      key: "name",
    },
    {
      title: "Car Model",
      dataIndex: ["type_id", "type_name"],
      key: "type",
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
    getCars();
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
          onClick={() => setShowCarForm(true)}
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
            Add Car
          </span>
          <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
        </button>
      </div>
      <Table dataSource={cars} columns={columns} pagination={{ pageSize: 7 }} />
      {showCarForm && (
        <CarForm
          showCarForm={showCarForm}
          setShowCarForm={setShowCarForm}
          type={selectedCar ? "edit" : "add"}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          getData={getCars}
        />
      )}
    </div>
  );
}

export default Cars;
