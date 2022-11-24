import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { Header, Sidebar, Content } from "./layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

const cx = classNames.bind(styles);

function App() {
  return (
    <Router>
      <div className={cx("App")}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <div className={cx('container')}>
                    <Header className={cx("header-layout")} />
                    <div className={cx("wrapper")}>
                      <Sidebar className={cx("sidebar-layout")} />
                      <Content className={cx("content-layout")}>
                        <Page />
                      </Content>
                    </div>
                  </div>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
