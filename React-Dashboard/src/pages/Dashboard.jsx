import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axiosInstance";
import { Col, Row, Statistic, message, Card } from "antd";

function Dashboard() {
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  const totalCars = async () => {
    try {
      const response = await axiosInstance.get("/api/car/get-all-cars", {});
      if (response.data.success) {
        setCars(response.data.data.length);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const totalUsers = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/get-all-users", {});
      if (response.data.success) {
        setUsers(response.data.data.length);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const totalOrders = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/reservation/get-all-reservations",
        {}
      );
      if (response.data.success) {
        setOrders(response.data.data.length);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    totalCars();
    totalUsers();
    totalOrders();
  }, []);
  return (
    <>
      <div className="p-10">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Current Cars"
                value={cars}
                valueStyle={{
                  color: "#3f8600",
                }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Current Users"
                value={users}
                valueStyle={{
                  color: "#cf1322",
                }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Orders"
                value={orders}
                valueStyle={{
                  color: "#cf1322",
                }}
              />
            </Card>
            {/* <Card>
              <Statistic
                title=""
                value={}
                valueStyle={{
                  color: "#cf1322",
                }}
              />
            </Card> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
