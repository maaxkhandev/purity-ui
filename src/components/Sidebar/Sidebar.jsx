import { Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import Logo from "@assets/logo.svg";
import DashboardIcon from "@assets/dashboard.svg";
import TableIcon from "@assets/table.svg";
import BillingIcon from "@assets/billing.svg";
import RTLIcon from "@assets/rtl.svg";
import ProfileIcon from "@assets/profile.svg";
import SignInIcon from "@assets/signin.svg";
import SignUpIcon from "@assets/signup.svg";
import "./Sidebar.css";
import SizedBox from "@components/sizedbox";

const { Sider } = Layout;

const sideBarMainData = [
  { title: "Dashboard", icon: DashboardIcon, path: "/" },
  { title: "Tables", icon: TableIcon, path: "/tables" },
  { title: "Billing", icon: BillingIcon, path: "/billing" },
  { title: "RTL", icon: RTLIcon, path: "/rtl" },
];

const sideBarProfileData = [
  { title: "Profile", icon: ProfileIcon, path: "/profile" },
  { title: "Sign In", icon: SignInIcon, path: "/signin" },
  { title: "Sign Up", icon: SignUpIcon, path: "/signup" },
];

const SidebarItem = ({ path, icon, title, isActive }) => (
  <Link to={path}>
    <div className={`sidebar-links ${isActive ? "active" : ""}`}>
      <div className="sidebar-icon">
        <img src={icon} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  </Link>
);

const Sidebar = () => {
  const { pathname } = useLocation();

  const renderSidebarItems = (items) =>
    items.map(({ path, icon, title }, index) => (
      <SidebarItem
        key={index}
        path={path}
        icon={icon}
        title={title}
        isActive={pathname === path}
      />
    ));

  return (
    <Sider width={200} className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <SizedBox height={30} />
      <div className="sidebar-section">
        {renderSidebarItems(sideBarMainData)}
      </div>
      <SizedBox height={10} />
      <h4>ACCOUNT PAGES</h4>
      <div className="sidebar-section">
        {renderSidebarItems(sideBarProfileData)}
      </div>
    </Sider>
  );
};

export default Sidebar;
