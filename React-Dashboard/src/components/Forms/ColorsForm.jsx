import React from "react";
import { Modal, Row, Form, Col, message } from "antd";
import { axiosInstance } from "../../helpers/axiosInstance";

function ColorsForm({
  showColorForm,
  setShowColorForm,
  type = "add",
  getData,
  selectedColor,
}) {
  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post(
        "/api/color/create-color",
        values
      );
      if (response.data.success) {
        message.success(response.data.message);
        setShowColorForm(false);
        getData();
      } else {
        message.error("Color already exists");
      }

      getData();
      setShowColorForm(false);
    } catch (error) {
      message.error("Color already exists");
      console.log(error);
    }
  };

  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Color" : "Update Color"}
      open={showColorForm}
      onCancel={() => {
        setShowColorForm(false);
      }}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedColor}>
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item
              label="Color Name"
              name="color_name"
              rules={[
                {
                  required: type === "add" ? true : true,
                  message:
                    type === "add"
                      ? "Please enter color name"
                      : "Please enter color name",
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
              label="Color Code"
              name="color_code"
              rules={[
                {
                  required: type === "add" ? true : true,
                  message:
                    type === "add"
                      ? "Please enter color code"
                      : "Please enter color code",
                },
              ]}
            >
              <input
                type="color"
                className="block border border-blue-500 w-full p-3 rounded-lg mb-4"
              />
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

export default ColorsForm;
