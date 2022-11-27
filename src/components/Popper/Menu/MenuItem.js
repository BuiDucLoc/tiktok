import classNames from 'classnames/bind';
import Button from '~/components/Buttom';
import styles from '~/components/Popper/Menu/Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon1} to={data.to} className={cx('btn_menu')}>
            {data.title}
        </Button>
    );
}
export default MenuItem;
