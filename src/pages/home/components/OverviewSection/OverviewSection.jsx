import React from "react";

import "../../Home.css";
import { Row, Col, Space } from "antd";
import todayMoneyIcon from "@assets/today-money.svg";
import todayUserIcon from "@assets/today-users.svg";
import newCliendIcon from "@assets/new-clients.svg";
import todaySalesIcon from "@assets/today-sales.svg";
import OverviewCard from "./OverviewCard";

const overviewData = [
  {
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    icon: todayMoneyIcon,
  },
  {
    title: "Today's Users",
    value: "2,300",
    change: "+5%",
    icon: todayUserIcon,
  },
  {
    title: "New Clients",
    value: "+3,052",
    change: "-14%",
    icon: newCliendIcon,
  },
  {
    title: "Total Sales",
    value: "$173,000",
    change: "+8%",
    icon: todaySalesIcon,
  },
];

const OverViewSection = () => {
  return (
    <div className="overview-section">
      <Row gutter={[20, 20]} justify="space-between">
        {overviewData.map((data, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <OverviewCard data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OverViewSection;
