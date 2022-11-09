import React from 'react';
import Extra from '../../Extra/Extra';
import Services from '../../Services/Services';
import Comment from '../Comment/Comment';
import Cover from '../Cover/Cover';
import Features from '../Features/Features';
import Skills from '../Skills/Skills';

const Home = () => {
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