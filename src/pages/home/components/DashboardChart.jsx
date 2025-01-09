import React from "react";
import { Col, Row } from "antd";
import ActiveUsersChart from "./ActiveUsersChart";
import SalesOverviewChart from "./SalesOverviewChart";

const data = [
  { name: "A", value: 100 },
  { name: "B", value: 200 },
  { name: "C", value: 150 },
  { name: "D", value: 300 },
  { name: "E", value: 400 },
  { name: "F", value: 350 },
];

const DashboardChart = () => {
  return (
    <section>
      <Row gutter={(24, 24)}>
        <Col xs={24} lg={10}>
          <ActiveUsersChart />
        </Col>
        <Col xs={24} lg={14}>
          <SalesOverviewChart />
        </Col>
      </Row>
    </section>
  );
};

export default DashboardChart;
