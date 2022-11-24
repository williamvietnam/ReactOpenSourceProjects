import classNames from 'classnames/bind';
import styles from './App.module.scss';
import {Header, Sidebar, Content} from './layouts';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('container')}>
      <Header className={cx('header-layout')}/>
      <Sidebar className={cx('sidebar-layout')}/>
      <Content className={cx('content-layout')}/>
    </div>
  );
}

export default App;
