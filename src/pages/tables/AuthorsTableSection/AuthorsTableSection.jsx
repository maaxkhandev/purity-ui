import React from "react";
import { Col, Row, Table, Avatar, Button } from "antd";
import "../Tables.css";

const { Column } = Table;
import author1 from "@assets/author1.png";
import author2 from "@assets/author2.png";
import author3 from "@assets/author3.png";
import author4 from "@assets/author4.png";
import author5 from "@assets/author5.png";
import author6 from "@assets/author6.png";

const authorsTableData = [
  {
    id: 1,
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    avatar: author1,
    function: {
      title: "Manager",
      subtitle: "Organization",
    },
    status: "Online",
    employed: "14/06/21",
  },
  {
    id: 2,
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    avatar: author2,
    function: {
      title: "Programmer",
      subtitle: "Developer",
    },
    status: "Offline",
    employed: "14/06/21",
  },
  {
    id: 3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    avatar: author3,
    function: {
      title: "Executive",
      subtitle: "Project",
    },
    status: "Online",
    employed: "14/06/21",
  },
  {
    id: 4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    avatar: author4,
    function: {
      title: "Manager",
      subtitle: "Organization",
    },
    status: "Online",
    employed: "14/06/21",
  },
  {
    id: 5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    avatar: author5,
    function: {
      title: "Manager",
      subtitle: "Organization",
    },
    status: "Offline",
    employed: "14/06/21",
  },
  {
    id: 6,
    name: "Esthera Jackson",
    email: "emark@simmmple.comm",
    avatar: author6,
    function: {
      title: "Mark Wilson",
      subtitle: "Organization",
    },
    status: "Offline",
    employed: "14/06/21",
  },
];

const AuthorsTableSection = () => {
  return (
    <section>
      <div className="authors-table custom-card">
        <Col>
          <div className="table-heading">
            <h4>Authors Table</h4>
          </div>
          <Table
            dataSource={authorsTableData}
            rowKey="id"
            scroll={{ x: "max-content" }}
          >
            <Column
              title="AUTHORS"
              key="author"
              render={(text, record) => (
                <Row gutter={[10, 0]}>
                  <Col>
                    <Avatar
                      shape="square"
                      size={35}
                      icon={<img src={record.avatar} alt="person" />}
                    />
                  </Col>

                  <Col>
                    <p className="title-1">{record.name}</p>
                    <p className="grey-text">{record.email}</p>
                  </Col>
                </Row>
              )}
            />
            <Column
              title="FUNCTION"
              key="functions"
              render={(text, record) => (
                <Col>
                  <p className="title-1">{record.function.title}</p>
                  <p className="grey-text"> {record.function.subtitle}</p>
                </Col>
              )}
            />

            <Column
              title="STATUS"
              key="status"
              render={(text, record) => (
                <p className={`${record.status} status-container`}>
                  {record.status}
                </p>
              )}
            />
            <Column
              title="EMPLOYED"
              key="employed"
              render={(text, record) => (
                <p className="title-1">{record.employed}</p>
              )}
            />
            <Column
              title=""
              key=""
              render={(text, record) => (
                <Button className="text-button" color="default" variant="link">
                  Edit
                </Button>
              )}
            />
          </Table>
        </Col>
      </div>
    </section>
  );
};

export default AuthorsTableSection;
