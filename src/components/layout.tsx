import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Header
        onClose={() => setSidebarOpen(false)}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Outlet />
      <Sidebar onClose={() => setSidebarOpen(false)} isOpen={sidebarOpen} />
    </>
  );
};

export default Layout;
