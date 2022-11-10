import React from 'react';

const Skills = () => {
    return (
        <div className='m-28'>
            <h1 className='text-5xl text-center mb-8'>My Skills</h1>
            <div className='lg:flex text-center'>

                <div className='w-1/2 shadow-2xl shadow-indigo-400/50'>
                    <img className='' src="https://i.ibb.co/0s82wdV/image.png" alt="" />
                </div>
                <div className='w-1/2 text-white shadow-2xl shadow-indigo-400/50'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='shadow-2xl p-8'>
                            <h2 className='border rounded-full'>90%</h2>
                            <h4 className='text-xl'>PORTRAITS</h4>
                            <p> The world without photography will be meaningless to us if there is no light.</p>
                        </div>
                        <div className='shadow-2xl p-8'>
                            <h2 className='border rounded-full'>90%</h2>
                            <h4 className='text-xl'>Lifestyles</h4>
                            <p> The world without photography will be meaningless to us if there is no light.</p>
                        </div>
                        <div className='shadow-2xl p-8'>
                            <h2 className='border rounded-full'>90%</h2>
                            <h4 className='text-xl'>Studio</h4>
                            <p> The world without photography will be meaningless to us if there is no light.</p>
                        </div>
                        <div className='shadow-2xl p-8'>
                            <h2 className='border rounded-full'>90%</h2>
                            <h4 className='text-xl'>Fashion</h4>
                            <p> The world without photography will be meaningless to us if there is no light.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Skills;