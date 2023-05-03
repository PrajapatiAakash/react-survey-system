import { Link } from 'react-router-dom'
import { useState } from 'react'

import axiosClient from '../axios.js'

export default function Signup() {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    const onSubmit = (ev) => {
        ev.preventDefault()
        console.log("hi")
        axiosClient.post("/singup", {

        })
        .then(({data}) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up for free
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={onSubmit} className="space-y-5" action="#" method="POST">
                    <div>
                        <label htmlFor="full-name" className="text-left block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-1">
                            <input
                            id="full-name"
                            name="name"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Please enter full name"
                            value={fullName}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-left block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Please enter email address"
                            value={email}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Please enter password"
                            value={password}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                            Password Confirmation
                        </label>
                        <div className="mt-1">
                            <input
                            id="password-confirmation"
                            name="password-confirmation"
                            type="password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Please enter password cofirmation"
                            value={passwordConfirmation}
                            />
                        </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign Up
                    </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login with your account
                    </Link>
                </p>
            </div>
        </>
    )
}