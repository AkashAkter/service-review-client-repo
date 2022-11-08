import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {

    const service = useLoaderData();

    return (
        <div>

            {/* SERVICE SECTION STARTS HERE*/}
            <section className='m-28'>

                <div class="lg:flex justify-evenly text-white shadow-2xl p-10">

                    <div class="lg:w-1/2">
                        <PhotoProvider>
                            <PhotoView src={service.image}>
                                <img src={service.image} alt="Shoes" className="rounded-3xl " />
                            </PhotoView>
                        </PhotoProvider>
                        <p className='text-center text-2xl mt-8'>PRICE: ${service.price}</p>
                    </div>

                    <div class="lg:w-1/2">
                        <h1 className='text-center text-3xl'>{service.name}</h1>
                        <p className='m-5 text-justify'>{service.details}</p>
                    </div>

                </div>

                <div>
                    <h1>More Photos</h1>
                    <div className='grid grid-cols-3 lg:grid-cols-3'>
                    </div>
                </div>

            </section>
            {/* SERVICE SECTION ENDS HERE*/}


            {/* REVIEW SECTION STARTS HERE*/}
            <section>

            </section>
            {/* REVIEW SECTION ENDS HERE*/}
        </div>
    );
};

export default ServiceDetails;