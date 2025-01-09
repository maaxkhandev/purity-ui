import React from "react";
import { Flex, Divider, Button } from "antd";
import SizedBox from "@components/sizedbox";
import facebook from "@assets/facebook.svg";
import instagram from "@assets/instagram.svg";
import twitter from "@assets/twitter.svg";

const ProfileInformation = () => {
  return (
    <div className="profile-info-card">
      <h4>Profile Information</h4>
      <SizedBox height={12} />
      <p>
        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term (pain avoidance is creating an illusion of equality).
      </p>
      <SizedBox height={14} />
      <Divider />
      <SizedBox height={14} />
      <Flex align="center" gap={4}>
        <h6>Full Name:</h6>
        <p>Alec M. Thompson</p>
      </Flex>
      <SizedBox height={8} />
      <Flex align="center" gap={4}>
        <h6>Mobile: </h6>
        <p>(44) 123 1234 123</p>
      </Flex>
      <SizedBox height={8} />
      <Flex align="center" gap={4}>
        <h6>Email: </h6>
        <p>alecthompson@mail.com</p>
      </Flex>
      <SizedBox height={8} />
      <Flex align="center" gap={4}>
        <h6>Location: </h6>
        <p> United States</p>
      </Flex>
      <SizedBox height={3} />
      <Flex align="center" gap={4}>
        <h6>Social Media: </h6>
        <Flex align="center">
          <Button
            type="text"
            shape="circle"
            className="social-icon-button"
            icon={<img src={facebook} alt="" srcSet="" />}
          />
          <Button
            shape="circle"
            type="text"
            className="social-icon-button"
            icon={<img src={instagram} alt="" srcSet="" />}
          />
          <Button
            shape="circle"
            type="text"
            className="social-icon-button"
            icon={<img src={twitter} alt="" srcSet="" />}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default ProfileInformation;
