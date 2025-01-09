import React from "react";
import SettingIcon from "@assets/setting.svg";
import bellIcon from "@assets/bell.svg";
import personIcon from "@assets/person.svg";
import { Layout, Input, Row, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./CustomNavbar.css";

const { Content } = Layout;

const CustomNavbar = ({ title, isWhite = false }) => {
  return (
    <Content>
      <Row align={"middle"} className="navbar">
        <div className="page-title">
          <h5 className={`${isWhite ? "white-title" : ""}`}>{title}</h5>
        </div>
        <div className="nav-content">
          <Input
            className="search-input"
            placeholder="default size"
            prefix={<SearchOutlined />}
          />
          <Button
            className={`sign-button ${isWhite ? "white-button" : ""}`}
            type="text"
            icon={<img src={personIcon} alt="person" />}
          >
            Sign In
          </Button>
          <Button
            className={` icon-button ${isWhite ? "white-button" : ""}`}
            shape="circle"
            icon={<img src={SettingIcon} alt="Settings" />}
          />
          <Button
            className={` icon-button ${isWhite ? "white-button" : ""}`}
            shape="circle"
            icon={<img src={bellIcon} alt="Notifications" />}
          />
        </div>
      </Row>
    </Content>
  );
};

export default CustomNavbar;
