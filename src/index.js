import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Avatar from "./Components/Avatar";
// import TrackerCharts from "./Components/TrackerCharts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App page="PregnancyTimelineMain" />} />
          <Route path="/avatar" element={<App page="avatar" />} />
          <Route path="/sos" element={<App page="PregnancyTimelineSOS" />} />
          <Route path="/community" element={<App page="CommunityMain" />} />
          <Route path="/thread" element={<App page="CommunitySub" />} />
          <Route path="/store" element={<App page="ecommerce" />} />
          {/* <Route path="/charts" element={<TrackerCharts />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
