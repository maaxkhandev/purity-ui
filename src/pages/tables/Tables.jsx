import React from "react";
import { Layout } from "antd";
import CustomNavbar from "@components/navbar/CustomNavbar";
import AuthorsTableSection from "./AuthorsTableSection/AuthorsTableSection";
import ProjectTableCard from "@pages/home/components/ProjectTableCard";

const { Content } = Layout;

const Tables = () => {
  return (
    <div>
      <Content>
        <CustomNavbar title={"Tables"} />
        <AuthorsTableSection />
        <section>
          <ProjectTableCard />
        </section>
      </Content>
    </div>
  );
};

export default Tables;
