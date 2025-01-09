import React from "react";
import notificationIcon from "@assets/notification.svg";
import htmlIcon from "@assets/html5.svg";
import cart from "@assets/cart.svg";
import card from "@assets/card.svg";
import packages from "@assets/package.svg";
import xd from "@assets/xd.svg";
import { Col, Row } from "antd";
const ordersOverviewData = [
  {
    title: "$2400, Design Changes",
    icon: notificationIcon,
    date: "22 DEC 7:20 PM",
  },
  {
    title: "New order #4219423",
    icon: htmlIcon,
    date: "21 DEC 11:21 PM",
  },
  {
    title: "Server Payments for April",
    icon: cart,
    date: "21 DEC 9:28 PM",
  },
  {
    title: "New card added for order #3210145",
    icon: card,
    date: "21 DEC 3:52 PM",
  },
  {
    title: "Unlock packages for Development",
    icon: packages,
    date: "19 DEC 11:35 PM",
  },
  {
    title: "New order #9851258",
    icon: xd,
    date: "18 DEC 4:41 PM",
  },
];
const OrderOverviewCard = () => {
  return (
    <div className="order-overview-section custom-card">
      <h4>Orders overview</h4>
      <p className="grey-text">
        <span>+30% </span>this month
      </p>
      <div className="order-overview-cards">
        {ordersOverviewData.map((e) => (
          <div className="order-overview-card" key={e.title}>
            <div className="overview-card-icon">
              <img src={e.icon} alt="" srcSet="" />
              <div className="vertical-line"></div>
            </div>
            <div className="overview-content">
              <h5>{e.title}</h5>
              <p className="grey-text">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOverviewCard;
