import PropTypes from "prop-types";
import styles from "./Slider.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const bindStyle = classNames.bind(styles);

function Slider({ images }) {
  const [index, setIndex] = useState(0);

  let sliderItem = images[index];

  const onPrevClicked = function () {
    if (index > 0 && index < images.length) {
      setIndex((preState) => preState - 1);
    } else if (index <= 0) {
      setIndex(3);
    }
  };

  const onNextClicked = function () {
    if (index >= 0 && index < images.length - 1) {
      setIndex((preState) => preState + 1);
    } else if (index >= images.length - 1) {
      setIndex(0);
    }
  };

  for (let i = 0; i < images.length; i++) {
    if (images[i] === index) {
      sliderItem = images[i];
    }
  }

  return (
    <div className={bindStyle("container")}>
      <div className={bindStyle("wrapper")}>
        <button onClick={onPrevClicked}>Prev</button>

        <div className={bindStyle("slider-show")}>
          <img
            className={bindStyle("image")}
            src={sliderItem.res}
            alt={sliderItem.title}
          />
        </div>

        <button onClick={onNextClicked}>Next</button>
      </div>
      <div className={bindStyle("slide-show-dot")}>
        <FontAwesomeIcon className={bindStyle("icon")} icon={faCircle} />
        <FontAwesomeIcon className={bindStyle("icon-active")} icon={faCircle} />
        <FontAwesomeIcon className={bindStyle("icon")} icon={faCircle} />
        <FontAwesomeIcon className={bindStyle("icon")} icon={faCircle} />
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slider;
