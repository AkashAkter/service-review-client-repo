import React from 'react';

const ReviewsSection = ({ review }) => {
    // console.log(review.reviewer);
    // console.log(review);
    const { reviewer, photoURL, details } = review;
    return (
        <div className='bg-gray-900	text-center	text-white rounded-2xl p-10'>
            <div className=''>
                <img className='mx-auto h-10 w-10 rounded-full' src={photoURL} alt="" />
                <h1 className='text-xl font-semibold my-4'>{reviewer}</h1>
            </div>
            <p>{details}</p>
        </div>
    );
};

export default ReviewsSection;