import classNames from "classnames/bind";
import {Link} from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({to, href, primary, children, onClick, ...passProps}){
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if(to){
        props.to = to;
        Comp = Link
    }else{
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper',{primary,});

    return(
        <Comp classNames={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;