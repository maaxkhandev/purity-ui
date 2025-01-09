import React from "react";
import { Switch, Flex } from "antd";

const ToggleSwitch = ({ title, onChange, defaultChecked = false }) => {
  const handleToggle = (checked) => {
    onChange(checked); // Pass the checked state back to the parent component
  };

  return (
    <div className="toggle-switch">
      <Flex gap={4}>
        <Switch
          defaultChecked={defaultChecked}
          size="small"
          onChange={handleToggle}
        />
        <p className="grey-text">{title}</p>
      </Flex>
    </div>
  );
};

export default ToggleSwitch;
