import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {Avatar} from "../../components";


const cx = classNames.bind(styles);

function Header() {
  return <div className={cx("container")}>
    <Avatar className={cx('avatar')}/>
    

    {/* Full name | Job | List horizontal url link*/}

    {/* Email ... */}
  </div>;
}

export default Header;
