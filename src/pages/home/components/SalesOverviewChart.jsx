import React from "react";
import { Col, Row } from "antd";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", sales2021: 100, sales2022: 120 },
  { month: "Feb", sales2021: 200, sales2022: 250 },
  { month: "Mar", sales2021: 150, sales2022: 300 },
  { month: "Apr", sales2021: 300, sales2022: 350 },
  { month: "May", sales2021: 400, sales2022: 450 },
  { month: "Jun", sales2021: 350, sales2022: 500 },
  { month: "Jul", sales2021: 300, sales2022: 480 },
  { month: "Aug", sales2021: 250, sales2022: 400 },
  { month: "Sep", sales2021: 200, sales2022: 350 },
  { month: "Oct", sales2021: 150, sales2022: 320 },
  { month: "Nov", sales2021: 100, sales2022: 280 },
  { month: "Dec", sales2021: 50, sales2022: 250 },
];

const SalesOverviewChart = () => {
  return (
    <div className="sales-overview-card custom-card">
      <div className="sales-overview-title">
        <h4>Active Users</h4>
        <p className="grey-text">
          <span>(+23)</span> than last week
        </p>
      </div>
      <ResponsiveContainer width="100%" minHeight={290}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSales2021" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4fd1c58a" stopOpacity={0.54} />
              <stop offset="95%" stopColor="#4fd1c500" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSales2022" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D3748" stopOpacity={0.36} />
              <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            tick={{ fill: "#CBD5E0", fontSize: 14, fontWeight: "600" }}
            tickLine={false}
            axisLine={false}
            dataKey="month"
          />
          <YAxis
            tick={{ fill: "#CBD5E0", fontSize: 14, fontWeight: "600" }}
            tickLine={false}
            axisLine={false}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales2021"
            stroke="#4FD1C5"
            fillOpacity={1}
            fill="url(#colorSales2021)"
          />
          <Area
            type="monotone"
            dataKey="sales2022"
            stroke="#2D3748"
            fillOpacity={1}
            fill="url(#colorSales2022)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverviewChart;
