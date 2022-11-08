import React from 'react';
import Extra from '../../Extra/Extra';
import Services from '../../Services/Services';
import Cover from '../Cover/Cover';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <Services></Services>
            <Skills></Skills>
            <Extra></Extra>
        </div>
    );
};

export default Home;