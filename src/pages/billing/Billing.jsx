import React from "react";
import { Layout } from "antd";
import CustomNavbar from "@components/navbar/CustomNavbar";
import BllingPaymentCards from "./components/BllingPaymentCards";
import BillingTransactionSection from "./components/BillingTransactionSection";

const { Content } = Layout;

const Billing = () => {
  return (
    <Content>
      <CustomNavbar title={"Billing"} />
      <BllingPaymentCards />
      <BillingTransactionSection />
    </Content>
  );
};

export default Billing;
