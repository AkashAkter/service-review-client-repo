import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            <div className="navbar bg-gray-800 px-20 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Services</Link></li>
                            <li><Link>Login</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.email ?
                                <>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/services'>My Reviews</Link></li>
                                    <li><Link to='/services'>Blogs</Link></li>
                                    <li className='my-auto'><button>Sign Out</button></li>

                                </>
                                :
                                <>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/services'>Blogs</Link></li>
                                    <li><Link to='/signIn'>Sign In</Link></li>
                                    <li>{user?.displayName}</li>
                                </>
                        }

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;