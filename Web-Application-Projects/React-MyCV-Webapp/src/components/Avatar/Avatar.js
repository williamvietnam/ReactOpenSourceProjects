import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

function Avatar({image, title = "avatar"}){
    return <div className={cx('wrapper')}>
        <img className={cx('image')} src={image} alt={title}/>       
    </div>
}

export default Avatar;