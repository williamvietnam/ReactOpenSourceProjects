import { NavLink } from "react-router-dom";
import styles from "./MenuNavItem.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function MenuNavItem({ title, to, icon }) {
  return (
    <NavLink className={(nav) => cx('menu-nav-item', { active: nav.isActive })} to={to}>
      <img className={cx("icon")} src={icon} alt={title} />
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

MenuNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuNavItem;
