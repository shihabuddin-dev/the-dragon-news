import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Spinner from "../components/Spinner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";

// import About from "../pages/about/About";
// import Blogs from "../pages/blogs/Blogs";
// import SignIn from "../pages/signin/SignIn";
// import SignUp from "../pages/signUp/SignUp";
// import PrivateRoutes from "./PrivateRoutes";
// import Profile from "../pages/profile/Profile";
// import News from "../pages/news/News";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            {
                path: '/category/:id',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('/news.json'),
                Component: CategoryNews
            },
            // { path: '/signin', Component: SignIn },
            // { path: '/signup', Component: SignUp },
            // { path: '/about', Component: About },
            // { path: '/blogs', Component: Blogs },

            // private routes 

            // {
            //     path: '/profile',
            //     element:
            //         <PrivateRoutes>
            //             <Profile />
            //         </PrivateRoutes>
            // },
            // {
            //     path: '/news',
            //     element:
            //         <PrivateRoutes>
            //             <News />
            //         </PrivateRoutes>
            // },
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
]);

export default router;