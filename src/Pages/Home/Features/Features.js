import React from 'react';

const Features = () => {
    return (
        <div className='bg-slate-800 hover:bg-black py-20'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-black'>Features</h1>
                <p className='text-white'>Just a few out of 100 why you should choose Fast Shutter.</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-20'>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>01.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Responsive & Retina Ready</h3>
                    <p>Provide your mobile users with the best experience by sharing the most detailed images.</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>02.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Powerful Design</h3>
                    <p>
                        ZUKO gives you the ability to build virtually any design style.</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>03.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Custom Typography</h3>
                    <p>
                        Feature your web project by choosing from 800+ Google Fonts that suits it the most.</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>04.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>High-speed Performance</h3>
                    <p>
                        Choose among many ready-made solutions to get your business running in no time!</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>05.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Free Premium Plugins</h3>
                    <p>
                        Get the most popular solutions on the market for working with WordPress for free!</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>06.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Auto Updates</h3>
                    <p>
                        Stay up-to-date with the latest version of our theme without needing to do it manually.</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>07.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Highly Customizable</h3>
                    <p>Make your site look the way you want it to by customizing it using our built-in tools and settings</p>
                </div>
                <div className='border p-10 lg:h-64  hover:shadow-2xl hover:shadow-indigo-400/50'>
                    <h2 className='text-2xl mb-2'>08.</h2>
                    <h3 className='text-white text-xl font-extrabold mb-2'>Friendly Support</h3>
                    <p>Stuck? Need help? Visit our support portal to find FAQ and a way to contact us.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;