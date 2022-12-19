import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import sidebar_menu from "../constants/sidebar-menu";
import moment from "moment";

function ProtectedRoute({ children }) {
  useEffect(() => {}, []);
  const admin_id = localStorage.getItem("admin_id");
  const navigate = useNavigate();
  const validateToken = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/${admin_id} `,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
      } else {
        localStorage.removeItem("admin_id");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } catch (error) {
      localStorage.removeItem("admin_id");
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate, admin_id]);

  useEffect(() => {
    const checklogin = () => {
      if (localStorage.getItem("token")) {
        validateToken();
      } else {
        navigate("/login");
      }
    };
    checklogin();
    const comparetime = () => {
      const time = localStorage.getItem("token_date");
      const currenttime = new Date().getTime();
      if (currenttime - time > 3600000) {
        localStorage.removeItem("admin_id");
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        navigate("/login");
      }
    };
    comparetime();
  }, [navigate, validateToken]);

  return (
    <div>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <div className="dashboard-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute;
