import React, { useState, useEffect } from "react";
import { message, Table } from "antd";
import { axiosInstance } from "../helpers/axiosInstance";

function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/get-all-users", {});
      if (response.data.success) {
        const mappedData = response.data.data.map((user) => {
          return {
            ...user,
            key: user._id,
          };
        });
        setUsers(mappedData);
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
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },

    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Creation Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render : (createdAt) => {
        return new Date(createdAt).toLocaleDateString();
      }
    }
  ];

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between p-7">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <Table
        dataSource={users}
        columns={columns}
        pagination={{ pageSize: 5 }}
        loading={users.length === 0}
      />
    </div>
  );
}

export default Users;
