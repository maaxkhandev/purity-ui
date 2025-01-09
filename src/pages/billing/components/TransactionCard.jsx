import React from "react";
import { Flex } from "antd";
import dayjs from "dayjs";

import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import calendar from "@assets/calendar.svg";
const today = dayjs().format("D MMMM YYYY hh:mm A");
const yesterday = dayjs().subtract(1, "day").format("D MMMM YYYY hh:mm A");

const transactionData = [
  {
    company: "Netflix",
    date: today,
    status: "decrease",
    amount: 2500,
  },
  {
    company: "Apple",
    date: today,
    status: "increase",
    amount: 2500,
  },
  {
    company: "Stripe",
    date: yesterday,
    status: "increase",
    amount: 800,
  },
  {
    company: "HubSpot",
    date: yesterday,
    status: "increase",
    amount: 1700,
  },
  {
    company: "Webflow",
    date: yesterday,
    status: "pending",
    amount: null,
  },
  {
    company: "Microsoft",
    date: yesterday,
    status: "decrease",
    amount: 987,
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "decrease":
      return (
        <ArrowDownOutlined className={`status-icon ${status.toLowerCase()}`} />
      );
    case "increase":
      return (
        <ArrowUpOutlined className={`status-icon ${status.toLowerCase()}`} />
      );
    case "pending":
      return (
        <ExclamationCircleOutlined
          className={`status-icon ${status.toLowerCase()}`}
        />
      );
    default:
      return null;
  }
};

const TransactionAmount = ({ amount, status }) => {
  if (amount === null) {
    return <p className={`${status}-amount`}>Pending</p>;
  }

  const isNegative = status === "decrease";
  const displayAmount = isNegative ? `-\$${amount}` : `+\$${amount}`;

  return <p className={`${status}-amount`}>{displayAmount}</p>;
};

const groupTransactions = () => {
  const parsedDates = transactionData.map((transaction) =>
    dayjs(transaction.date, "D MMMM YYYY hh:mm A")
  );

  const sortedDte = parsedDates.sort((a, b) => b - a);
  const newestDate = sortedDte[0];

  const yesterdayDate = newestDate.subtract(1, "day");

  const todayTransactions = [];
  const yesterdayTransactions = [];

  transactionData.forEach((transaction) => {
    const transactionDate = dayjs(transaction.date, "D MMMM YYYY hh:mm A");
    if (transactionDate.isSame(newestDate, "day")) {
      todayTransactions.push(transaction);
    } else if (transactionDate.isSame(yesterdayDate, "day")) {
      yesterdayTransactions.push(transaction);
    }
  });

  return { todayTransactions, yesterdayTransactions };
};

const TransactionCard = () => {
  const { todayTransactions, yesterdayTransactions } = groupTransactions();

  return (
    <div className="transactions-list">
      <Flex justify="space-between" style={{ marginBottom: "16px" }}>
        <h4>Your Transactions</h4>
        <Flex justify="center" align="center" gap={8}>
          <img src={calendar} alt="" />
          <p className="grey-title">{today}</p>
        </Flex>
      </Flex>

      {/* Newest Transactions */}
      {todayTransactions.length > 0 && (
        <>
          <p className="grey-title">NEWEST</p>
          {todayTransactions.map((e, index) => (
            <div key={index} className="transaction-card">
              <Flex justify="space-between">
                <Flex gap={6}>
                  {getStatusIcon(e.status)}
                  <Flex vertical="vertical" gap={4}>
                    <p className="title-1">{e.company}</p>
                    <p className="grey-title">{e.date}</p>
                  </Flex>
                </Flex>
                <TransactionAmount amount={e.amount} status={e.status} />
              </Flex>
            </div>
          ))}
        </>
      )}

      {/* Yesterday Transactions */}
      {yesterdayTransactions.length > 0 && (
        <>
          <p className="grey-title">YESTERDAY</p>
          {yesterdayTransactions.map((e, index) => (
            <div key={index} className="transaction-card">
              <Flex justify="space-between">
                <Flex gap={6}>
                  {getStatusIcon(e.status)}
                  <Flex vertical="vertical" gap={4}>
                    <p className="title-1">{e.company}</p>
                    <p className="grey-title">{e.date}</p>
                  </Flex>
                </Flex>
                <TransactionAmount amount={e.amount} status={e.status} />
              </Flex>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default TransactionCard;
