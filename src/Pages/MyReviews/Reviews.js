import React from 'react';

const Reviews = ({ review, handleDelete }) => {

    const { _id, serviceName, image, details } = review;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl shadow-indigo-400/20 image-full">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-xs'>{serviceName}</h2>
                    <p className="text-3xl font-bold">{details}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-sm">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;