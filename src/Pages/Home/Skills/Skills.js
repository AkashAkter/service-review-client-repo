import React from 'react';

const Skills = () => {
    return (
        <div className='lg:flex m-32'>
            <div className='w-1/2'>
                <img className='' src="https://i.ibb.co/0s82wdV/image.png" alt="" />
            </div>
            <div className='w-1/2 m-5 text-white'>
                <h1 className='text-3xl'>My Skills</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <h2 className=''>90%</h2>
                        <h4>PORTRAITS</h4>
                        <p> The world without photography will be meaningless to us if there is no light.</p>
                    </div>
                    <div>
                        <h2>90%</h2>
                        <h4>Lifestyles</h4>
                        <p> The world without photography will be meaningless to us if there is no light.</p>
                    </div>
                    <div>
                        <h2>90%</h2>
                        <h4>Studio</h4>
                        <p> The world without photography will be meaningless to us if there is no light.</p>
                    </div>
                    <div>
                        <h2>90%</h2>
                        <h4>Fashion</h4>
                        <p> The world without photography will be meaningless to us if there is no light.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Skills;