import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <section className="bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                        Welcome
                    </a>
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                                Create your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required="" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-white">Photo URL</label>
                                    <input type="link" name="photoURL" id="PhotoURL" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Photo URL" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                </div>

                                <button type="submit" className="w-full bg-gray-500 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/signIn" className="text-white">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;