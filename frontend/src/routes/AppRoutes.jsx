import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import MainLayout from "../layouts/MainLayout";
import Channel from "../pages/Channel";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/channel" element={<Channel />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
