import { Outlet, Navigate } from "react-router-dom";
import Logo from '/mark.svg'
import {useStateContext} from '../contexts/ContextProvider'

export default function GuestLayout() {
    const {userToken} = useStateContext();
    if (userToken) {
        return (
            <Navigate to="/" />
        )
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src={Logo + "?color=indigo&shade=600"}
                    alt="Your Company"
                />
            </div>
            <Outlet />
        </div>
    )
}