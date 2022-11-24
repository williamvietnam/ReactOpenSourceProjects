import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Avatar } from "../../components";
import images from "../../assets/images";

const cx = classNames.bind(styles);
const IMAGE_AVATAR_URL =
  "https://t3.ftcdn.net/jpg/03/31/21/08/360_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg";

function Header() {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper-left")}>
        <Avatar className={cx("avatar")} image={IMAGE_AVATAR_URL} />
      </div>
      <div className={cx("wrapper-center")}>
        <h2 className={cx("name")}>Nguyễn Văn ABCXYZ</h2>
        <h4 className={cx("job")}>Software Developer</h4>
        <ul className={cx("my-account-nav")}>
          <li className={cx("btn")}>
            <img
              className={cx("icon-btn")}
              src={images.githubIcon}
              alt="github button"
            />
          </li>
          <li className={cx("btn")}>
            <img
              className={cx("icon-btn")}
              src={images.facebookIcon}
              alt="facebook button"
            />
          </li>
          <li className={cx("btn")}>
            <img
              className={cx("icon-btn")}
              src={images.linkedinIcon}
              alt="linkedin button"
            />
          </li>
        </ul>
      </div>
      <div className={cx("divider-vertical")}></div>
      <div className={cx("wrapper-right")}>
        <div className={cx("top-info")}>
          <div className={cx("top-info-inside")}>
            <p className={cx("title-info")}>Email</p>
            <p className={cx("content-info")}>my-email-1999@gmail.com</p>
          </div>
          <div className={cx("top-info-inside")}>
            <p className={cx("title-info")}>Date of birth</p>
            <p className={cx("content-info")}>15-05-1995</p>
          </div>
        </div>
        <div className={cx("bottom-info")}>
          <div className={cx("bottom-info-inside")}>
            <p className={cx("title-info")}>Number phone</p>
            <p className={cx("content-info")}>09868686868</p>
          </div>
          <div className={cx("bottom-info-inside")}>
            <p className={cx("title-info")}>Address</p>
            <p className={cx("content-info")}>Hanoi - Vietnam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
