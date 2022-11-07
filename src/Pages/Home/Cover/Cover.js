import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css'

const Cover = () => {
    return (
        <div>
            <div className="home-banner  flex items-center justify-center">
                <h1 className="banner-title text-center text-white text-7xl">
                    If you want
                    To go big<br />Stop
                    Thinking small
                </h1>
            </div>
        </div>
    );
};

export default Cover;