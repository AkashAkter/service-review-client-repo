import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css'

const Cover = () => {
    return (
        <div>
            <div className="home-banner  flex items-center justify-center">
                <h1 className="banner-title text-center text-white text-7xl">
                    <span className='text-orange-500'>AKASH</span>AKTER
                    <br /> <span className='text-2xl'>PROFESSIONAL PHOTOGRAPHER</span>
                    <br /> <span className='text-sm'>Made for photographers, have own photo studio<br />
                        <Link to='/services'><button className='btn hover:bg-orange-500 text-white'>See My Services</button></Link></span>
                </h1>

            </div>
        </div>
    );
};

export default Cover;