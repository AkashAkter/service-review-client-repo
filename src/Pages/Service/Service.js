import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { _id, image, name, details, price, } = service
    return (
        <div>
            <div className="card bg-blue-600 shadow-xl m-6">
                <figure className="px-10 pt-10">

                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="Shoes" className="rounded-xl " />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;