import member1 from "@assets/avatar1.png";
import member2 from "@assets/avatar2.png";
import member3 from "@assets/avatar3.png";
import member4 from "@assets/avatar4.png";
import member5 from "@assets/avatar5.png";
import xd from "@assets/xd.svg";
import ptrack from "@assets/ptrack.svg";
import slack from "@assets/slack.svg";
import spotify from "@assets/spotify.svg";
import pricingPage from "@assets/pricingpage.svg";
import shop from "@assets/shop.svg";

const projectsData = [
  {
    id: 1,
    company: "Chakra Soft UI Version",
    logo: xd,
    members: [member1, member2, member3, member4, member5],
    budget: "$14,000",
    completion: 60,
  },
  {
    id: 2,
    company: "Add Progress Track",
    logo: ptrack,
    members: [member4, member5],
    budget: "$3,000",
    completion: 10,
  },
  {
    id: 3,
    company: "Fix Platform Errors",
    logo: slack,
    members: [member1, member2, member3],
    budget: "Not set",
    completion: 100,
  },
  {
    id: 4,
    company: "Launch our Mobile App",
    logo: spotify,
    members: [member1, member2, member3, member4, member5],
    budget: "$32,000",
    completion: 100,
  },
  {
    id: 5,
    company: "Add the New Pricing Page",
    logo: pricingPage,
    members: [member1, member4, member5],
    budget: "$400",
    completion: 25,
  },
  {
    id: 6,
    company: "Redesign New Online Shop",
    logo: shop,
    members: [member1, member2, member3],
    budget: "$7,600",
    completion: 40,
  },
];

export default projectsData;
