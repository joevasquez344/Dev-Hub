import Landing from 'pages/Landing/Landing';
import Home from 'pages/Home/Home';
import Profile from 'pages/Profile/Profile';
import Explore from 'pages/Explore/Explore';
import Jobs from 'pages/Jobs/Jobs';

const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        name:'landing',
        component: Landing
    },
    {
        id: 2,
        path: '/home',
        exact: true,
        name:'home',
        component: Home
    },
    {
        id: 3,
        path: '/profile',
        exact: true,
        name:'profile',
        component: Profile
    },
    {
        id: 4,
        path: '/explore',
        exact: true,
        name:'explore',
        component: Explore
    },
    {
        id: 5,
        path: '/jobs',
        exact: true,
        name:'jobs',
        component: Jobs
    },
]

export default routes;