import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content({page}) {
  return <h2 className={cx('heading')}>Content</h2>;
}

Content.propTypes = {
  page: PropTypes.object.isRequired,
};

export default Content;