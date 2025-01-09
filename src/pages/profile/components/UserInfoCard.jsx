import React from "react";
import { Flex, Avatar, Button } from "antd";
import profile from "@assets/profile.png";
import overviewIcon from "@assets/overview.svg";
import teamsIcon from "@assets/teams.svg";
import projectsIcon from "@assets/projects.svg";
import editIcon from "@assets/edit1.svg";

const UserInfoCard = () => {
  return (
    <div className="user-info-card">
      <div className="user-info-content">
        <Flex gap={10}>
          <div className="profile-picture">
            <Avatar shape="square" size={80} icon={<img src={profile} />} />
            <img src={editIcon} alt="" srcSet="" />
          </div>
          <Flex vertical="vertical" justify="center" gap={5}>
            <h4>Esthera Jackson</h4>
            <p className="grey-text">esthera@simple.com</p>
          </Flex>
        </Flex>
        <Flex gap={10}>
          <Button
            className="text-button"
            type="text"
            icon={<img src={overviewIcon} alt="person" />}
          >
            OVERVIEW
          </Button>
          <Button
            className="text-button"
            type="text"
            icon={<img src={teamsIcon} alt="person" />}
          >
            TEAMS
          </Button>
          <Button
            className="text-button"
            type="text"
            icon={<img src={projectsIcon} alt="person" />}
          >
            PROJECTS
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default UserInfoCard;
