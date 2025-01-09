import React from "react";
import ChakraImage from "@assets/chakra.png";
import highlight2 from "@assets/highlight-2.png";
import { Col, Row, Space } from "antd";
import "../Home.css";
import ReadMoreButton from "@components/ReadMoreButton/ReadMoreButton";

const HighlightsSection = () => {
  return (
    <div className="highlight-section">
      <Row gutter={[26, 26]}>
        <Col lg={13} md={24}>
          <div className="highlight-1 custom-card">
            <Row justify="space-between">
              {/* Left Column */}
              <Col className="hightlight-1-content" xs={24} md={12}>
                <Space direction="vertical" size="small">
                  <h6>Built by developers</h6>
                  <h4>Purity UI Dashboard</h4>
                  <p className="grey-text">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                </Space>
                <ReadMoreButton
                  onButtonClick={() => console.log("read more clicked")}
                />
              </Col>
              {/* Right Column */}
              <Col xs={24} md={12}>
                <div className="chakra">
                  <img src={ChakraImage} alt="Chakra Illustration" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* {card two } */}
        <Col lg={11} md={24}>
          <div className="highlight-2 custom-card">
            <div className="highlight-2-content">
              <img src={highlight2} alt="Sample" />
              <div className="text-overlay">
                <Space direction="vertical" size="small">
                  <h4>Work with the Rockets</h4>
                  <p>
                    Wealth creation is an evolutionarily recent positive-sum
                    game. its all about the oppurtunity first.
                  </p>
                </Space>
                <ReadMoreButton
                  onButtonClick={() => console.log("read more clicked")}
                  isWhite={true}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HighlightsSection;
