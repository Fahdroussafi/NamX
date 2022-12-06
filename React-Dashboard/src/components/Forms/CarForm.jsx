import React, { useState, useEffect } from "react";
import { Modal, Row, Form, Col, message } from "antd";
import { axiosInstance } from "../../helpers/axiosInstance";

function CarForm({
  showCarForm,
  setShowCarForm,
  type = "add",
  getData,
  selectedCar,
  setSelectedCar,
}) {
  const [types, setTypes] = useState([]);

  const getTypes = async () => {
    try {
      const response = await axiosInstance.get("/api/type/get-all-types", {});
      if (response.data.success) {
        // console.log(response.data.data);
        setTypes(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post("/api/car/create-car", values);
      if (type === "add") {
        if (response.data.success) {
          setShowCarForm(false);
          getData();
        } else {
          message.error("Car name or type already exists");
        }
      } else {
        response = await axiosInstance.put(
          `/api/car/${selectedCar._id}`,
          values
        );
      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error("Car name or type already exists");
      }
      getData();
      setShowCarForm(false);
      setSelectedCar(null);
    } catch (error) {
      message.error("Car name or type already exists");
      console.log(error);
    }
  };

  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Car" : "Update Car"}
      open={showCarForm}
      onCancel={() => {
        setSelectedCar(null);
        setShowCarForm(false);
      }}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedCar}>
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item
              label="Car Name"
              name="name_car"
              rules={[
                {
                  required: type === "add" ? true : true,
                  message:
                    type === "add"
                      ? "Please enter car name"
                      : "Please enter car name",
                },
              ]}
            >
              <input
                type="text"
                className="block border border-blue-500 w-full p-3 rounded-lg mb-4"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="Car Type"
              name="type_id"
              rules={[
                {
                  required: type === "add" ? true : true,
                  message: "Please Choose an option",
                  validateTrigger: "onSubmit",
                },
              ]}
            >
              <select
                className="block border border-blue-500 w-full p-3 rounded-lg mb-4"
                name="car_type"
              >
                <option value="">--Please choose an option--</option>
                {types.map((type) => (
                  <option value={type._id}>{type.type_name}</option>
                ))}
              </select>
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end">
          <button
            type="submit"
            className="relative inline-flex items-center justify-start
                px-10 py-3 overflow-hidden font-bold rounded-full
                group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
              Save
            </span>
            <span className="absolute inset-0 border-2 border-blue-600 rounded-full"></span>
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default CarForm;
