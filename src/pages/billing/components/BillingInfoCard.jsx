import React from "react";
import { Col, Row, Button, Flex, Space } from "antd";
import deleteIcon from "@assets/delete.svg";
import editIcon from "@assets/edit.svg";

const billingData = [
  {
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vatNumber: "FRB1235476",
  },
  {
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vatNumber: "FRB1235476",
  },
  {
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vatNumber: "FRB1235476",
  },
];
export const BillingInfoCard = () => {
  return (
    <div className="billing-info-section">
      <h4>Billing Information</h4>
      {billingData.map((e) => (
        <div className="billing-info-card">
          <Row justify={"space-between"}>
            <Col>
              <p className="title-1 ">Oliver Liam</p>
              <Space direction="vertical" size={3}>
                <Flex gap={4}>
                  <p className="grey-text">Company Name:</p>{" "}
                  <p className="title-2">{e.company}</p>
                </Flex>
                <Flex gap={4}>
                  <p className="grey-text">Email Address:</p>{" "}
                  <p className="title-2">{e.email}</p>
                </Flex>
                <Flex gap={4}>
                  <p className="grey-text">VAT Number:</p>{" "}
                  <p className="title-2">{e.vatNumber}</p>
                </Flex>
              </Space>
            </Col>
            <Col>
              <Flex>
                <Button
                  className="delete-button"
                  icon={<img src={deleteIcon} />}
                  type="text"
                >
                  DELETE
                </Button>
                <Button
                  className="edit-button"
                  icon={<img src={editIcon} />}
                  type="text"
                >
                  EDIT
                </Button>
              </Flex>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};
