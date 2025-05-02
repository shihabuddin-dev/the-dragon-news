import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Spinner from "../components/Spinner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, Component: Home },
            {
                path: '/category/:id',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('../news.json'),
                Component: CategoryNews
            }
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
    },
         // private routes 
    {
        path: '/news-details/:id',
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch('../news.json'),
        element: <PrivateRoutes>
            <NewsDetails />
        </PrivateRoutes>
    },
    
]);

export default router;