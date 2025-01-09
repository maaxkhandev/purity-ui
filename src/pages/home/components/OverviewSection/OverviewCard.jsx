import React from "react";
import { Row, Col, Space } from "antd";
import SizedBox from "@components/sizedbox";
import "../../Home.css";

const OverviewCard = ({ data }) => {
  const { title, value, change, icon } = data;

  return (
    <div className="overview-card">
      <Row justify="space-between">
        <Col>
          <Space direction="vertical" size="small">
            <h6>{title}</h6>
            <Row align="middle">
              <h4>{value}</h4>
              <SizedBox width={7} />
              <span
                className={change.startsWith("+") ? "positive" : "negative"}
              >
                {change}
              </span>
            </Row>
          </Space>
        </Col>
        <Col>
          <img src={icon} alt={`${title} icon`} className="overview-icon" />
        </Col>
      </Row>
    </div>
  );
};

export default OverviewCard;
