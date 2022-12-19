import DashboardIcon from "../assets/icons/dashboard.svg";
import ProductIcon from "../assets/icons/product.svg";
import UserIcon from "../assets/icons/user.svg";
import CarIcon from "../assets/icons/car.svg";
import ImageIcon from "../assets/icons/image.svg";
import DetailsIcon from "../assets/icons/details.svg";
import TypeIcon from "../assets/icons/type.svg";
import ColorIcon from "../assets/icons/color.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: ProductIcon,
    path: "/orders",
    title: "Orders",
  },
  {
    id: 3,
    icon: CarIcon,
    path: "/cars",
    title: "Cars",
  },
  {
    id: 4,
    icon: TypeIcon,
    path: "/types",
    title: "Types",
  },
  {
    id: 5,
    icon: DetailsIcon,
    path: "/details",
    title: "Details",
  },
  {
    id: 6,
    icon: ColorIcon,
    path: "/colors",
    title: "Colors",
  },
  {
    id: 7,
    icon: ImageIcon,
    path: "/images",
    title: "Images",
  },
  {
    id: 8,
    icon: UserIcon,
    path: "/users",
    title: "Users",
  },
];

export default sidebar_menu;
