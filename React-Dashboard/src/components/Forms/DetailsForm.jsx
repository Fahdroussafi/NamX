import React from "react";
import { Modal, Form, message, Button, Input, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { axiosInstance } from "../../helpers/axiosInstance";

function DetailsForm({
  showDetailsForm,
  setShowDetailsForm,
  type = "add",
  getData,
  selectedDetails,
  setSelectedDetails,
}) {
  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post(
        "/api/details/create-details",
        values
      );

      if (type === "add") {
        if (response.data.success) {
          setShowDetailsForm(false);
          getData();
        } else {
          message.error("Details name already exists");
        }
      } else {
        response = await axiosInstance.put(
          `/api/details/${selectedDetails._id}`,
          values
        );
      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      getData();
      setShowDetailsForm(false);
      setSelectedDetails(null);
    } catch (error) {
      message.error("Details name already exists");
      console.log(error);
    }
  };

  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Details" : "Update Details"}
      open={showDetailsForm}
      onCancel={() => {
        setSelectedDetails(null);
        setShowDetailsForm(false);
      }}
      footer={false}
    >
      <Form
        name="dynamic_form_nest_item"
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        initialValues={[{ details: selectedDetails?.details }]}
      >
        <Form.List name="details">
          {(fields, { add, remove }) => (
            <>
              {fields.map((key, name, ...restField) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "details_name"]}
                    rules={[
                      { required: true, message: "Missing details name" },
                    ]}
                  >
                    <Input placeholder="Details Name" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "details_description"]}
                    rules={[{ required: true, message: "Missing description" }]}
                  >
                    <Input placeholder="Details Description" />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
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

export default DetailsForm;
