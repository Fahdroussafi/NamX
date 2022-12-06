import React, { useState, useEffect, useCallback } from "react";
import DashboardHeader from "../components/DashboardHeader";
import moment from "moment";

import all_orders from "../constants/orders";
import { calculateRange, sliceData } from "../utils/table-pagination";

// import "./styles.css";
import DoneIcon from "../assets/icons/done.svg";
import CancelIcon from "../assets/icons/cancel.svg";
import RefundedIcon from "../assets/icons/refunded.svg";
// import { axiosInstance } from "../../helpers/axiosInstance";
import axios from "axios";

function Orders() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState({});
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get(
        "/api/reservation/get-all-reservations",
        {}
      );
      // console.log(response.data.data);
      setOrders(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
    // setPagination(calculateRange(orders, 1));
    // setOrders(sliceData(orders, page, 1));
  }, []);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = orders.filter(
        (item) =>
          item.user.name.toLowerCase().includes(search.toLowerCase()) ||
          item.car.name_car.toLowerCase().includes(search.toLowerCase()) ||
          item.status.toLowerCase().includes(search.toLowerCase())
      );
      setOrders(search_results);
    } else {
      getOrders();
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setOrders(sliceData(orders, new_page, 5));
  };

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <DashboardHeader btnText="New Order" />

      <div className="m-4 bg-white border-none rounded-xl p-4 flex flex-col gap-7 overflow-auto">
        <div className="flex flex-row justify-between">
          <h2 className="mt-auto mb-auto text-black font-bold text-xl">
            Orders List
          </h2>
          <div className="font-normal box-border cursor-text inline-flex items-center border border-gray-200 relative bg-transparent text-sm rounded-md ">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="box-content m-0 block min-w-0 w-full text-black text-xs p-2"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table className="w-full m-auto pt-5">
          <thead className="table-row align-middle outline-none border-6 leading-normal">
            <th className="text-left bg-transparent shadow-none border-b py-5 text-blue-700 font-bold text-lg leading-tight">
              Order ID
            </th>
            <th className="text-left bg-transparent shadow-none border-b py-5 text-blue-700 font-bold text-lg leading-tight">
              Order Time
            </th>
            <th className="text-left bg-transparent shadow-none border-b py-5 text-blue-700 font-bold text-lg leading-tight">
              Order Status
            </th>
            <th className="text-left bg-transparent shadow-none border-b py-5 text-blue-700 font-bold text-lg leading-tight">
              Customer
            </th>
            <th className="text-left bg-transparent shadow-none border-b py-5 text-blue-700 font-bold text-lg leading-tight">
              Car
            </th>
            <th className="text-left bg-transparent shadow-none border-b py-5 text-blue-700 font-bold text-lg leading-tight">
              Quantity
            </th>
          </thead>

          {orders.length !== 0 ? (
            <tbody className="table-row-group ">
              {orders.length &&
                orders?.map((order, index) => (
                  <tr
                    className="border-b table-row align-middle outline-none"
                    key={index}
                  >
                    <td className="text-left py-5 bg-transparent shadow-none">
                      <span className="m-0 py-10 text-xs leading-tight opacity-100 normal-case no-underline text-gray-600 font-bold">
                        {order._id}
                      </span>
                    </td>
                    <td className="text-left bg-transparent shadow-none">
                      <span className="m-0 text-xs leading-tight opacity-100 normal-case no-underline text-gray-600 font-bold">
                        {moment(order.time).format("DD/MM/YYYY")}
                      </span>
                    </td>
                    <td className="text-left bg-transparent shadow-none">
                      {
                        <div className="flex flex-row items-center">
                          {order.status === "paid" ? (
                            <img
                              src={DoneIcon}
                              alt="paid-icon"
                              className="w-5 mr-2"
                            />
                          ) : order.status === "canceled" ? (
                            <img
                              src={CancelIcon}
                              alt="canceled-icon"
                              className="w-5 mr-2"
                            />
                          ) : order.status === "pending" ? (
                            <img
                              src={RefundedIcon}
                              alt="refunded-icon"
                              className="w-5 mr-2"
                            />
                          ) : null}
                          <span className="m-0 text-xs leading-tight opacity-100 normal-case no-underline text-gray-600 font-bold">
                            {order.status}
                          </span>
                        </div>
                      }
                    </td>
                    <td className="text-left bg-transparent shadow-none">
                      <div className="flex flex-row items-center">
                        <span className="m-0 text-xs leading-tight opacity-100 normal-case no-underline text-gray-600 font-bold">
                          {order.user.name}
                        </span>
                      </div>
                    </td>
                    <td className="text-left bg-transparent shadow-none">
                      <span className="m-0 text-xs leading-tight opacity-100 normal-case no-underline text-gray-600 font-bold">
                        {order.car.name_car}
                      </span>
                    </td>
                    <td className="text-left bg-transparent shadow-none">
                      <span className="m-0 text-xs leading-tight opacity-100 normal-case no-underline text-gray-600 font-bold">
                        {order.quantity}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          ) : null}
        </table>

        {orders.length !== 0 ? (
          <div className="flex flex-row justify-center">
            {/* {pagination.map((item, index) => (
              <span
                key={index}
                className={
                  item === page
                    ? "p-2 m-1 rounded text-white bg-blue-700 cursor-pointer"
                    : "p-2 m-1 rounded bg-gray-200 cursor-pointer"
                }
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))} */}
          </div>
        ) : (
          <div className="flex flex-row justify-center">
            <span className="m-0 text-base leading-tight text-gray-600 font-bold border-white">
              No data
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
