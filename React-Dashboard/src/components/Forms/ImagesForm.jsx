import React, { useState, useEffect } from "react";
import { Modal, Row, Form, Col, message, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { axiosInstance } from "../../helpers/axiosInstance";

function ImagesForm({
  showImagesForm,
  setShowImagesForm,
  type = "add",
  getData,
  selectedImages,
  setSelectedImages,
}) {
  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post(
        "/api/image/create-image",
        values
      );
      if (type === "add") {
        if (response.data.success) {
          setShowImagesForm(false);
          getData();
        } else {
          message.error("Car name or type already exists");
        }
      } else {
        response = await axiosInstance.put(
          `/api/car/${selectedImages._id}`,
          values
        );
      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error("Car name or type already exists");
      }
      getData();
      setShowImagesForm(false);
      setSelectedImages(null);
    } catch (error) {
      message.error("Car name or type already exists");
      console.log(error);
    }
  };
  // const normFile = (e) => {
  //   console.log("Upload event:", e);

  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  // };

  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Image" : "Update Image"}
      open={showImagesForm}
      onCancel={() => {
        setSelectedImages(null);
        setShowImagesForm(false);
      }}
      footer={false}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={selectedImages}
      >
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item
              label="Image Name"
              name="name_image"
              rules={[
                {
                  required: type === "add" ? true : true,
                  message:
                    type === "add"
                      ? "Please enter image name"
                      : "Please enter image name",
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
              label="Image"
              name="image"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
              rules={[
                {
                  required: type === "add" ? true : true,
                  message:
                    type === "add"
                      ? "Please enter image"
                      : "Please enter image",
                },
              ]}
            >
              <Upload
                name="image"
               action={`${process.env.REACT_APP_API_URL}/api/image/upload-image`}
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
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

export default ImagesForm;
