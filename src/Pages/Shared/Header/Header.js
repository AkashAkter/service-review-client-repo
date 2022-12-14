import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { localStorage.removeItem('token') })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-gray-700 px-20 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user?.email ?
                                    <>
                                        <li><Link to='/services'>Services</Link></li>
                                        <li><Link to='/addServices'>Add Service</Link></li>
                                        <li><Link to='/myReviews'>My Reviews</Link></li>
                                        <li><Link to='/blogs'>Blogs</Link></li>
                                        <li className='my-auto'><button onClick={handleLogOut}>Sign Out</button></li>

                                    </>
                                    :
                                    <>
                                        <li><Link to='/services'>Services</Link></li>
                                        <li><Link to='/blogs'>Blogs</Link></li>
                                        <li><Link to='/signIn'>Sign In</Link></li>

                                    </>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Fast Shutter</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.email ?
                                <>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/addServices'>Add Service</Link></li>
                                    <li><Link to='/myReviews'>My Reviews</Link></li>
                                    <li><Link to='/blogs'>Blogs</Link></li>
                                    <li className='my-auto'><button onClick={handleLogOut}>Sign Out</button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/blogs'>Blogs</Link></li>
                                    <li><Link to='/signIn'>Sign In</Link></li>
                                </>
                        }

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;