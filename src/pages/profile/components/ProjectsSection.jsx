import React from "react";
import SizedBox from "@components/sizedbox";
import { Row, Col, Flex, Button, Avatar } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import project1 from "@assets/project1.png";
import project2 from "@assets/project2.png";
import project3 from "@assets/project3.png";
import member1 from "@assets/avatar1.png";
import member2 from "@assets/avatar2.png";
import member3 from "@assets/avatar3.png";
import member4 from "@assets/avatar4.png";
import member5 from "@assets/avatar5.png";

const projects = [
  {
    id: 1,
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    image: project1,
    members: [member1, member2, member3],
  },
  {
    id: 2,
    title: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    image: project2,
    members: [member3, member4, member5],
  },
  {
    id: 3,
    title: "Minimalist",
    description:
      "Different people have different tastes, and various types of music.",
    image: project3,
    members: [member1, member2, member3, member4],
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h4>Projects</h4>
      <SizedBox height={5} />
      <p className="grey-text">Architects design houses</p>
      <SizedBox height={25} />
      <Row gutter={[30, 30]}>
        {projects.map((e) => (
          <Col xs={24} lg={6}>
            <div className="project-card">
              <div className="project-image">
                <img src={e.image} alt="" />
                <div className="project-image-gradient"></div>
              </div>
              <SizedBox height={10} />
              <p className="grey-text">{`Project #${e.id}`}</p>
              <SizedBox height={7} />
              <h4>{e.title}</h4>
              <SizedBox height={15} />
              <p className="grey-text-medium ">{e.description}</p>
            </div>
            <SizedBox height={15} />
            <Flex justify="space-between" align="center">
              <Button className="view-all-button" variant="outlined">
                Outlined
              </Button>

              <Avatar.Group>
                {e.members.map((e) => (
                  <a href="https://ant.design">
                    <Avatar className="projects-avatar" size={25} src={e}>
                      K
                    </Avatar>
                  </a>
                ))}
              </Avatar.Group>
            </Flex>
          </Col>
        ))}
        <Col xs={24} lg={6}>
          <div className="create-new-project-card">
            <PlusOutlined />
            <p>Create a New Project</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ProjectsSection;
