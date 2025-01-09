import React from "react";
import { Col, Row, Button, Flex } from "antd";
import pdf from "@assets/pdf.svg";
import "../Billing.css";
const invoiceData = [
  {
    date: "March, 01, 2020",
    amount: "$180",
    tId: "#MS-415646",
  },
  {
    date: "February, 10, 2021",
    amount: "$250",
    tId: "#RV-126749",
  },
  {
    date: "April, 05, 2020",
    amount: "$250",
    tId: "#RV-126749",
  },
  {
    date: "April, 05, 2020",
    amount: "$560",
    tId: "#FB-212562",
  },
  {
    date: "June, 25, 2019",
    amount: "$120",
    tId: "#QW-103578",
  },
  {
    date: "March, 01, 2019",
    amount: "$300",
    tId: "#AR-803481",
  },
];
const InvoiceCard = () => {
  return (
    <div className="invoice-cards">
      <Flex justify={"space-between"} align="center">
        <h4>Invoices</h4>
        <Button className="view-all-button" variant="outlined">
          VIEW ALL
        </Button>
      </Flex>
      {invoiceData.map((e) => (
        // <Flex justify="space-between" align="center">
        //     Row
        // </Flex>
        <div className="invoice-card">
          <Row justify={"space-between"} align={"middle"}>
            <Col>
              <Flex vertical gap={6}>
                <p className="title-1">{e.date}</p>
                <p className="grey-title">{e.tId}</p>
              </Flex>
            </Col>
            <Col>
              <Flex gap={14}>
                <p className="grey-title">{e.amount}</p>
                <Flex gap={2}>
                  <img src={pdf} alt="" />
                  <p className="title-1">PDF</p>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default InvoiceCard;
