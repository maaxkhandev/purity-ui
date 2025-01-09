import React from "react";
import { Col, Row, Table, Avatar, Progress } from "antd";
import projectsData from "@data/ProjectsData";
import doneIcon from "@assets/done.svg";

const { Column } = Table;

const ProjectTableCard = () => {
  return (
    <div className="projects-table custom-card">
      <Col>
        <div className="table-heading">
          <h4>Projects</h4>
          <Row className="table-heading-subData">
            <img src={doneIcon} alt="done" srcset="" />
            <h6>30 done</h6>
            <p className="grey-text">this month</p>
          </Row>
        </div>
        <Table
          dataSource={projectsData}
          rowKey="id"
          className="table-projects"
          scroll={{ x: "max-content" }}
        >
          <Column
            title="COMPANIES"
            key="company"
            render={(text, record) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={record.logo}
                  alt={record.company}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 8,
                  }}
                />
                <p className="title-1">{record.company}</p>
              </div>
            )}
          />
          <Column
            title="MEMBERS"
            key="members"
            render={(text, record) => (
              <Avatar.Group>
                {record.members.map((e) => (
                  <a href="https://ant.design">
                    <Avatar className="projects-avatar" size={25} src={e}>
                      K
                    </Avatar>
                  </a>
                ))}
              </Avatar.Group>
            )}
          />
          <Column title="BUDGET" dataIndex="budget" key="budget" />
          <Column
            title="Completion"
            key="complection"
            render={(text, record) => (
              <div>
                <p className="blue-title">{record.completion}%</p>
                <Progress
                  percent={record.completion}
                  strokeColor={"#3bcbbe"}
                  size="small"
                  showInfo={false}
                />
              </div>
            )}
          />
        </Table>
      </Col>
    </div>
  );
};

export default ProjectTableCard;
