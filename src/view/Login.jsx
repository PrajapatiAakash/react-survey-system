import { Link } from "react-router-dom";
import { useState } from 'react'

import axiosClient from '../axios.js'
import { useStateContext } from '../contexts/ContextProvider.jsx';

export default function Login() {
    const {setUserToken, setCurrentUser} = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({__html: ""})

    const onSubmit = (ev) => {
        ev.preventDefault()
        setError({ __html: "" });
        axiosClient.post("/login", {
            email,
            password
        })
        .then(({data}) => {
            setUserToken(data.token);
            setCurrentUser(data.user);
        })
        .catch((error) => {
            if (error.response) {
                const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
                setError({__html: finalErrors.join('<br>')});
            }
        })
    }

    return (
        <>  
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white mb-6" dangerouslySetInnerHTML={error}>
                    </div>)}
                <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                    <label htmlFor="email" className="text-left block text-sm font-medium leading-6 text-gray-900">
                        Email Address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Please enter email address"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                        <div className="text-sm">
                        <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Please enter password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign In
                    </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </Link>
                </p>
            </div>
        </>
    )
}