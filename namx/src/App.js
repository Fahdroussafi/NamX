import React from "react";
// import 'antd/dist/antd.min.css';
// import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import ShowCar from "./pages/ShowCar";

import "./style.css";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcar" element={<ShowCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
