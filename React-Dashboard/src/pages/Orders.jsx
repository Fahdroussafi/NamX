import React, { useState, useEffect } from "react";
import moment from "moment";
import { message, Table } from "antd";
import DoneIcon from "../assets/icons/done.svg";
import CancelIcon from "../assets/icons/cancel.svg";
import RefundedIcon from "../assets/icons/refunded.svg";
import { axiosInstance } from "../helpers/axiosInstance";

function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/reservation/get-all-reservations",
        {}
      );
      if (response.data.success) {
        const mappedData = response.data.data.map((order) => {
          return {
            ...order,
            key: order._id,
          };
        });

        setOrders(mappedData);
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
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },

    {
      title: "Car",
      dataIndex: ["car", "name_car"],
      key: "car",
    },

    {
      title: "Order Time",
      dataIndex: "time",
      key: "time",
      render: (time) => moment(time).format("DD/MM/YYYY"),
    },

    {
      title: "Customer Name",
      dataIndex: ["user"],
      key: "name",
      render: (user) => (
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">{user.firstName}</span>
          <span className="text-sm text-gray-500">{user.lastName}</span>
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className="flex items-center gap-2">
          {status === "completed" && (
            <img src={DoneIcon} alt="done" className="w-5 h-5" />
          )}
          {status === "cancelled" && (
            <img src={CancelIcon} alt="cancel" className="w-5 h-5" />
          )}
          {status === "pending" && (
            <img src={RefundedIcon} alt="refunded" className="w-5 h-5" />
          )}
          <span className="text-sm text-gray-500">{status}</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between p-7">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
      <Table
        dataSource={orders}
        columns={columns}
        pagination={{ pageSize: 5 }}
        loading={orders.length === 0}
      />
    </div>
  );
}

export default Orders;
