import React from "react";
import { Col, Row, Divider, Button, Input, Tooltip } from "antd";
import visaCard from "@assets/visa-card.png";
import "../Billing.css";

import salaryIcon from "@assets/salary.svg";
import pyapalIcon from "@assets/paypal.svg";
import masterCard from "@assets/master.svg";
import visa from "@assets/visa.svg";
import edit from "@assets/edit.svg";
import InvoiceCard from "./InvoiceCard";

const BllingPaymentCards = () => {
  return (
    <section>
      <Row gutter={[24, 24]}>
        <Col md={24} lg={16}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <div className="visa-card">
                <img src={visaCard} alt="" srcSet="" />
                <div className="visa-card-content">
                  <Row>
                    <Col>
                      <p className="visa-card-number">7812 2139 0823 XXXX</p>
                      <Row gutter={[20, 20]}>
                        <Col>
                          <p className="title">VALID THRU</p>
                          <p className="subtitle">05/24</p>
                        </Col>
                        <Col>
                          <p className="title">CVV </p>
                          <p className="subtitle">09X</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="salary-card">
                <div className="icon">
                  <img src={salaryIcon} alt="" srcSet="" />
                </div>
                <p className="title-1">Salary</p>
                <p className="grey-text">Belong Inactive</p>
                <Divider />
                <p className="title-1">+$2000</p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="salary-card">
                <div className="icon">
                  <img src={pyapalIcon} alt="" srcSet="" />
                </div>
                <p className="title-1">Paypal</p>
                <p className="grey-text">Freelance Payment</p>
                <Divider />
                <p className="title-1">$455,00</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="payment-method-card">
                <Col>
                  <Row justify={"space-between"} align={"middle"}>
                    <h4>Payment Method</h4>
                    <Button className="add-card-button" type="text">
                      ADD A NEW CARD
                    </Button>
                  </Row>
                  <Row
                    className="payment-input-row"
                    gutter={[16, 16]}
                    justify="space-between"
                  >
                    <Col xs={24} lg={12}>
                      <Input
                        placeholder="7812 2139 0823 XXXX"
                        prefix={<img src={masterCard} />}
                        suffix={
                          <Tooltip title="Edit">
                            <Button
                              shape="circle"
                              type="text"
                              icon={<img src={edit} />}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    <Col xs={24} lg={12}>
                      <Input
                        placeholder="7812 2139 0823 XXXX"
                        prefix={<img src={visa} />}
                        suffix={
                          <Tooltip title="Edit">
                            <Button
                              shape="circle"
                              type="text"
                              icon={<img src={edit} />}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={8}>
          <InvoiceCard />
        </Col>
      </Row>
    </section>
  );
};

export default BllingPaymentCards;
