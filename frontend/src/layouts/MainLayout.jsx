import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔥 HEADER – FULL WIDTH */}
      <Header />

      <div className="flex">
        {/* Sidebar (below header) */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
