import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Spinner from "../components/Spinner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";


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