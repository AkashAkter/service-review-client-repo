import React from 'react';

const AddReview = () => {
    return (
        <div className='bg-gray-900 m-12 p-12 lg:mx-80 rounded-3xl'>
            <h1 className='text-white text-center font-black text-3xl my-5'>ADD YOUR OWN REVIEW</h1>
            <form className="space-y-4 md:space-y-6 px-20 py-12">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <input type="text" name="name" id="name" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Name" required="" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" name="email" id="email" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="" />
                </div>
                <div>
                    <label htmlFor="details" className="block mb-2 text-sm font-medium text-white">Review Details</label>
                    <input type="text" name="details" id="details" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="details" required="" />
                </div>

                <input type="submit" className="w-full bg-gray-500 text-black font-extrabold hover:text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center" value="Add Review" />

            </form>
        </div>
    );
};

export default AddReview;