import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
