import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../../Services/Services';
import Comment from '../Comment/Comment';
import Cover from '../Cover/Cover';
import Features from '../Features/Features';
import Skills from '../Skills/Skills';

const Home = () => {
    useTitle('Fast Shutter');
    return (
        <div>
            <Cover></Cover>
            <Services></Services>
            <Features></Features>
            <Skills></Skills>
            <Comment></Comment>
        </div>
    );
};

export default Home;