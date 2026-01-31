import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import Channel from "../pages/Channel";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔓 Public route */}
      <Route path="/login" element={<Login />} />

      {/* 🎥 Main YouTube Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />

        {/* 🔒 Protected inside layout */}
        <Route element={<PrivateRoute />}>
          <Route path="/channel/:id" element={<Channel />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
