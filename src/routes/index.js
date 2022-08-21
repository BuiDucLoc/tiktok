import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/components/Layout/HeaderOnly';
//khoong can dang nhap vao duoc
const publicRouter = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

//can dang nhap moi vao dc
const privateRouter = [];
export { privateRouter, publicRouter };
