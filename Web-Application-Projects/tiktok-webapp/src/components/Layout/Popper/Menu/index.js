import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Layout/Popper";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function Menu({children}){
    return (
        <Tippy
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("content")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h2>Menu</h2>
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    );
}

export default Menu;