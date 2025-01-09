import React from "react";
import { Col, Row } from "antd";
import { BillingInfoCard } from "./BillingInfoCard";
import TransactionCard from "./TransactionCard";

const BillingTransactionSection = () => {
  return (
    <section>
      <Row gutter={(24, 24)}>
        <Col xs={24} lg={14}>
          <BillingInfoCard />
        </Col>
        <Col xs={24} lg={10}>
          <TransactionCard />
        </Col>
      </Row>
    </section>
  );
};

export default BillingTransactionSection;
