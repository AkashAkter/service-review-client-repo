import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData();

    return (
        <div>

            {/* SERVICE SECTION STARTS HERE*/}
            <section>

                <div class="lg:flex justify-evenly m-20 text-white shadow-2xl p-20">

                    <div class="lg:w-1/2">
                        <img className='rounded-3xl' src={service.image} alt="" />
                        <p className='text-center text-2xl mt-8'>PRICE: ${service.price}</p>
                    </div>

                    <div class="lg:w-1/2">
                        <h1 className='text-center text-3xl'>{service.name}</h1>
                        <p className='m-5 text-justify'>{service.details}</p>
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