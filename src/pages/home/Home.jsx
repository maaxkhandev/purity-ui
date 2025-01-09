import { Layout } from "antd";
import CustomNavbar from "@components/navbar/CustomNavbar";
import OverViewSection from "./components/OverviewSection/OverviewSection";
import HighlightsSection from "./components/HighlightsSections";
import DashboardChart from "./components/DashboardChart";
import ProjectsSection from "./components/ProjectsSection";

const { Content } = Layout;

const Home = () => {
  return (
    <div className="home-content">
      <Content>
        <CustomNavbar title={"Dashboard"} />
        <OverViewSection />
        <HighlightsSection />
        <DashboardChart />
        <ProjectsSection />
      </Content>
    </div>
  );
};

export default Home;
