import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Surveys from "./view/Surveys";
import SurveyView from "./view/SurveyView";
import ForgotPassword from "./view/ForgotPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/surveys",
                element: <Surveys />,
            },
            {
                path: "/surveys/create",
                element: <SurveyView />,
            },
            {
                path: "/surveys/:id",
                element: <SurveyView />,
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            }
        ]
    }
]);

export default router;