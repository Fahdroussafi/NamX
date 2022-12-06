import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import sidebar_menu from "../constants/sidebar-menu";

function ProtectedRoute({ children }) {
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
        // message.error(response.data.message);
        // navigate("/login");
        window.location.href = "/login";
      }
    } catch (error) {
      localStorage.removeItem("admin_id");
      localStorage.removeItem("token");
      // message.error(error.message);
      navigate("/login");
    }
  }, [navigate, admin_id]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
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
