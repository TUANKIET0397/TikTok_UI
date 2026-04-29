import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';

// Không cần đăng nhập vẫn có thể xem được trang chủ và trang following
const publicRoutes = [
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
    },
];

// Cần đăng nhập mới có thể xem được trang profile, upload video, ... nên để privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
