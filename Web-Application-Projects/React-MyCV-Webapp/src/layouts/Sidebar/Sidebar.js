import classNames from "classnames/bind";
import MenuNavItem from "../../components/MenuNavItem/MenuNavItem";
import styles from "./Sidebar.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

const MENU_NAVIGATION = [
  {
    id: 1,
    icon: images.introductionIcon,
    link: "/",
    title: "Introduction",
  },
  {
    id: 2,
    icon: images.educationIcon,
    link: "/education",
    title: "Education",
  },
  {
    id: 3,
    icon: images.goalsIcon,
    link: "/goals",
    title: "Goals",
  },
  {
    id: 4,
    icon: images.interestIcon,
    link: "/interests",
    title: "Interests",
  },
  {
    id: 5,
    icon: images.travelingIcon,
    link: "/traveling",
    title: "Traveling",
  },
];

function Sidebar() {
  return (
    <div className={cx("container")}>
      <nav>
        <MenuNavItem
          title={MENU_NAVIGATION[0].title}
          to={MENU_NAVIGATION[0].link}
          icon={MENU_NAVIGATION[0].icon}
        />

        <MenuNavItem
          title={MENU_NAVIGATION[1].title}
          to={MENU_NAVIGATION[1].link}
          icon={MENU_NAVIGATION[1].icon}
        />

        <MenuNavItem
          title={MENU_NAVIGATION[2].title}
          to={MENU_NAVIGATION[2].link}
          icon={MENU_NAVIGATION[2].icon}
        />

        <MenuNavItem
          title={MENU_NAVIGATION[3].title}
          to={MENU_NAVIGATION[3].link}
          icon={MENU_NAVIGATION[3].icon}
        />

        <MenuNavItem
          title={MENU_NAVIGATION[4].title}
          to={MENU_NAVIGATION[4].link}
          icon={MENU_NAVIGATION[4].icon}
        />
      </nav>
    </div>
  );
}

export default Sidebar;
