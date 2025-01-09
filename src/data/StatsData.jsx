import UserIcon from "@assets/users.svg";
import ClickIcon from "@assets/clicks.svg";
import SalesIcon from "@assets/sales.svg";
import ItemsIcon from "@assets/items.svg";

const statsData = [
  {
    icon: UserIcon,
    label: "Users",
    value: "32,984",
    progress: 70, // Percentage progress for the green bar
  },
  {
    icon: ClickIcon,
    label: "Clicks",
    value: "2,42m",
    progress: 60,
  },
  {
    icon: SalesIcon,
    label: "Sales",
    value: "2,400$",
    progress: 50,
  },
  {
    icon: ItemsIcon,
    label: "Items",
    value: "320",
    progress: 80,
  },
];

export default statsData;
