import React from "react";
import { Col, Row } from "antd";
import ProjectTableCard from "./ProjectTableCard";
import OrderOverviewCard from "./OrderOverviewCard";

const ProjectsSection = () => {
  return (
    <section>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <ProjectTableCard />
        </Col>
        <Col xs={24} lg={8}>
          <OrderOverviewCard />
        </Col>
      </Row>
    </section>
  );
};

export default ProjectsSection;
