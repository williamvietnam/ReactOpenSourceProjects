import styles from "./AvatarComponent.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const bindStyles = classNames.bind(styles);

function AvatarComponent({ image }) {
  return (
    <div className={bindStyles("avatar-container")}>
      <h1>Avatar</h1>
    </div>
  );
}

AvatarComponent.propTypes = {
  image: PropTypes.node.isRequired,
};

export default AvatarComponent;
