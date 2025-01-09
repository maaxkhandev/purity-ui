import React from "react";
import { Layout, Col, Row, Button, Flex, Avatar } from "antd";
import waves from "@assets/wave.png";

import CustomNavbar from "@components/navbar/CustomNavbar";

import "./Profile.css";
import UserInfoCard from "./components/UserInfoCard";
import { ProfileSetting } from "./components/ProfileSetting";
import ProfileInformation from "./components/ProfileInformation";
import ConversationCard from "./components/ConversationCard";
import ProjectsSection from "./components/ProjectsSection";

const { Content } = Layout;

const Profile = () => {
  return (
    <Content>
      <div className="wave-card">
        <img src={waves} alt="" srcSet="" />
        <div className="profile-navbar">
          <CustomNavbar title={"Profile"} isWhite={true} />
        </div>
        <UserInfoCard />
      </div>
      <section className="profile-setting-section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8}>
            <ProfileSetting />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <ProfileInformation />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <ConversationCard />
          </Col>
        </Row>
      </section>
      <ProjectsSection />
    </Content>
  );
};

export default Profile;
