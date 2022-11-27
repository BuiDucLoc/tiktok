import classNames from 'classnames/bind';
import styles from './Buttom.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary = false,
    ouline = false,
    large = false,
    small = false,
    medium = false,
    text = false,
    disable = false,
    rounded = false,
    leftIcon = false,
    rightIcon,
    className,
    onClick,
    ...passpros
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passpros,
    };
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const ten = cx('wrapper', {
        primary1: primary,
        [className]: className,
        ouline,
        small,
        large,
        rounded,
        text,
        disable,
    });
    return (
        <Comp className={ten} {...props}>
            <span className={cx('icon')}>{leftIcon && leftIcon}</span>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
