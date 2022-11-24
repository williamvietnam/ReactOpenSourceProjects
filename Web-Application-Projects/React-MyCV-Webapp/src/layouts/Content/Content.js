import classNames from "classnames/bind";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content({ children }) {
  return (
    <div className={cx('container')}>
      {children}
    </div>
  );
}

export default Content;