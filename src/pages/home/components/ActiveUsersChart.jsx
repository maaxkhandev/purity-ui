import React from "react";
import { Col, Row, Progress } from "antd";
import { ResponsiveContainer, BarChart, YAxis, Bar, Tooltip } from "recharts";
import statsData from "@data/StatsData";

const data = [
  { name: "A", value: 100 },
  { name: "B", value: 200 },
  { name: "C", value: 150 },
  { name: "D", value: 300 },
  { name: "E", value: 400 },
  { name: "F", value: 350 },
];

const ActiveUsersChart = () => {
  return (
    <div className="active-users-card custom-card">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={data}>
            <YAxis
              tick={{ fill: "#ffffff", fontSize: 14, fontWeight: "600" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="value" barSize={10} radius={20} fill="white" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="active-users-summary">
        <h4>Active Users</h4>
        <p>
          <span>(+23)</span> than last week
        </p>
      </div>
      <div className="active-stats-cards">
        <Row gutter={[18, 18]}>
          {statsData.map((e) => (
            <Col xs={24} md={12} lg={6}>
              <div className="active-user-stats-card">
                <Row align={"middle"} gutter={[6, 10]}>
                  <Col>
                    <img src={e.icon} alt={e.label} />
                  </Col>
                  <Col>
                    <h5>{e.label}</h5>
                  </Col>
                </Row>
                <h4>{e.value}</h4>
                <Progress
                  size="small"
                  strokeColor={"#3BCBBE"}
                  className="progress-bar"
                  percent={e.progress}
                  showInfo={false}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ActiveUsersChart;
