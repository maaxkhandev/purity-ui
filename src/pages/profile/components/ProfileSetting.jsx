import React from "react";
import { Flex, Switch } from "antd";
import ToggleSwitch from "@components/ToggleSwitch";

export const ProfileSetting = () => {
  return (
    <div className="profile-setting-cards">
      <h4>Profile Settings</h4>
      <div className="profile-setting-card">
        <p className="profile-setting-title">ACCOUNT</p>
        <ToggleSwitch
          title="Email me when someone follows me"
          onChange={(v) => {
            console.log("Switch toggled:", v);
          }}
          defaultChecked={true}
        />
        <ToggleSwitch
          title="Email me when someone answers on my post"
          onChange={(v) => {
            console.log("Switch toggled:", v);
          }}
          defaultChecked={false}
        />
        <ToggleSwitch
          title="Email me when someone mentions me"
          onChange={(v) => {
            console.log("Switch toggled:", v);
          }}
          defaultChecked={true}
        />
        <p className="profile-setting-title">APPLICATION</p>
        <ToggleSwitch
          title="New launches and projects"
          onChange={(v) => {
            console.log("Switch toggled:", v);
          }}
          defaultChecked={false}
        />
        <ToggleSwitch
          title="Monthly product updates"
          onChange={(v) => {
            console.log("Switch toggled:", v);
          }}
          defaultChecked={false}
        />
        <ToggleSwitch
          title="Subscribe to newsletter"
          onChange={(v) => {
            console.log("Switch toggled:", v);
          }}
          defaultChecked={true}
        />
      </div>
    </div>
  );
};
