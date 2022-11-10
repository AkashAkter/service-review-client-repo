import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {

    const { _id, image, serviceName, details, price } = service
    return (
        <div>
            <div className="card shadow-2xl shadow-indigo-400/20 m-6 h-96">
                <figure className="px-10 pt-10">
                    {
                        image ?
                            <PhotoProvider>
                                <PhotoView src={image}>
                                    <img src={image} alt="Shoes" className="shadow-indigo-400/20 h-40 w-60 rounded-xl" />
                                </PhotoView>
                            </PhotoProvider>
                            :
                            <PhotoProvider>
                                <PhotoView src="https://images.squarespace-cdn.com/content/v1/5430da84e4b096aeb94a0050/1425876678608-3UIKARYPCKAQUFL18RZX/parrots.jpg?format=1000w">
                                    <img src="https://images.squarespace-cdn.com/content/v1/5430da84e4b096aeb94a0050/1425876678608-3UIKARYPCKAQUFL18RZX/parrots.jpg?format=1000w" alt="Shoes" className="shadow-indigo-400/20 h-40 w-60 rounded-xl" />
                                </PhotoView>
                            </PhotoProvider>
                    }
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{serviceName}</h2>
                    <p className='text-justify'>{details.slice(0, 100)}...</p>

                    <p className='text-2xl'>Price : <span className=''>${price}</span></p>

                    <Link to={`/services/${_id}`}><button className="btn">View Details</button></Link>

                </div>
            </div>
        </div >
    );
};

export default Service;