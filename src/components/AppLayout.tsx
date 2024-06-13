import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="w-full h-full flex max-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="h-full w-full overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AppLayout;
