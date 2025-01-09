import React from "react";
import { Layout } from "antd";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "@pages/home/Home";
import Tables from "@pages/tables/Tables";
import Billing from "@pages/billing/Billing";
import RTL from "@pages/rtl/RTL";
import Profile from "@pages/profile/Profile";
import Sidebar from "@components/Sidebar/Sidebar";

// App Layout Component
const AppLayout = () => (
  <Layout style={{ display: "flex", height: "100vh" }}>
    <Sidebar />
    <Layout style={{ padding: "20px", width: "100%", overflowY: "auto" }}>
      <Outlet />
    </Layout>
  </Layout>
);

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tables", element: <Tables /> },
      { path: "/billing", element: <Billing /> },
      { path: "/rtl", element: <RTL /> },
      { path: "/profile", element: <Profile /> },
   
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
