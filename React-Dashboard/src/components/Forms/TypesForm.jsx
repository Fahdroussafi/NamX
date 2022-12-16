import React, { useState, useEffect } from "react";
import { Modal, Row, Form, Col, message, Input, Space } from "antd";
import { axiosInstance } from "../../helpers/axiosInstance";

function TypesForm({
  showTypesForm,
  setShowTypesForm,
  type = "add",
  getData,
  selectedTypes,
  setSelectedTypes,
}) {
  const [details, setDetails] = useState([]);
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  let colorsArray = [];
  let imagesArray = [];
  let i = 1;

  const getDetails = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/details/get-all-details",
        {}
      );
      if (response.data.success) {
        setDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getImages = async () => {
    try {
      const response = await axiosInstance.get("/api/image/get-images", {});
      if (response.data.success) {
        setImages(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getColors = async () => {
    try {
      const response = await axiosInstance.get("/api/color/get-all-colors", {});
      if (response.data.success) {
        setColors(response.data.data);
      } else {
        message.error(response.data.message);

        console.log(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post("/api/type/create-type", {
        ...values,
        color: colorsArray,
        image: imagesArray,
      });

      if (type === "add") {
        if (response.data.success) {
          setShowTypesForm(false);
          getData();
        } else {
          message.error("Type name already exists");
        }
      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      getData();
      setShowTypesForm(false);
      setSelectedTypes(null);
    } catch (error) {
      message.error("Type name already exists");
      console.log(error);
    }
  };

  // send color id to backend as array based on checkbox checked
  const handleColorChange = (e) => {
    if (e.target.checked) {
      colorsArray.push(e.target.value);
    } else {
      colorsArray = colorsArray.filter((color) => color !== e.target.value);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.checked) {
      imagesArray.push(e.target.value);
    } else {
      imagesArray = imagesArray.filter((image) => image !== e.target.value);
    }
  };

  useEffect(() => {
    getDetails();
    getColors();
    getImages();
  }, []);

  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Type" : "View Type"}
      open={showTypesForm}
      onCancel={() => {
        setSelectedTypes(null);
        setShowTypesForm(false);
      }}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedTypes}>
        <Row gutter={[10, 10]}>
          <Col lg={12} xs={24}>
            <Form.Item label="Colors" name="color">
              <Space direction="vertical">
                {colors.map((color, key) => (
                  <div key={key} className="flex space-x-4 items-center p-2">
                    <input
                      type="checkbox"
                      value={color._id}
                      key={key}
                      onChange={handleColorChange}
                    />

                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color.color_code }}
                    ></div>
                    <p>{color.color_name}</p>
                  </div>
                ))}
              </Space>
            </Form.Item>
            <Form.Item label="Images" name="image">
              <Space direction="vertical">
                {images.map((image, key) => (
                  <div className="flex space-x-4 items-center p-2" key={key}>
                    <input
                      type="checkbox"
                      value={image._id}
                      onChange={handleImageChange}
                    />
                    <p>{image.name}</p>
                  </div>
                ))}
              </Space>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item
              label="Car Type"
              name="details"
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
                name="details"
              >
                <option value="">--Please choose an option--</option>
                {details.map((detail, key) => (
                  <option key={detail._id} value={detail._id}>
                    Details: {i++}
                  </option>
                ))}
              </select>
            </Form.Item>
            <Form.Item
              label="Type Name"
              name="type_name"
              rules={[
                {
                  required: type === "add" ? true : true,
                  message: "Please input your Type Name!",
                  validateTrigger: "onSubmit",
                },
              ]}
            >
              <Input placeholder="Type Name" />
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

export default TypesForm;
