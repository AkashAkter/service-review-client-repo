import React from 'react';

const Service = ({ service }) => {
    const { image, name, details, price, } = service
    return (
        <div>
            <div className="card bg-blue-600 shadow-xl m-6">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;