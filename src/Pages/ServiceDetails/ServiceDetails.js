import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import AddReview from '../AddReview/AddReview';

const ServiceDetails = () => {

    const service = useLoaderData();
    // console.log(service.more_images);
    const { img1, img2, img3, img4, img5, img6 } = service.more_images;

    return (
        <div>

            {/* SERVICE SECTION STARTS HERE*/}
            <section className='m-28'>

                <div className="lg:flex justify-evenly text-white shadow-2xl p-10">

                    <div className="lg:w-1/2">
                        <PhotoProvider>
                            <PhotoView src={service.image}>
                                <img src={service.image} alt="Shoes" className="rounded-3xl " />
                            </PhotoView>
                        </PhotoProvider>
                        <p className='text-center text-2xl mt-8'>PRICE: ${service.price}</p>
                    </div>

                    <div className="lg:w-1/2">
                        <h1 className='text-center text-3xl'>{service.name}</h1>
                        <p className='m-5 text-justify'>{service.details}</p>
                    </div>

                </div>

                <div className='my-20'>
                    <h1 className='text-5xl text-center m-10 font-black'>More Photos</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>

                        <img className='h-full' src={img1} alt="" />
                        <img className='h-full' src={img2} alt="" />
                        <img className='h-full' src={img3} alt="" />
                        <img className='h-full' src={img4} alt="" />
                        <img className='h-full' src={img5} alt="" />
                        <img className='h-full' src={img6} alt="" />

                    </div>
                </div>

            </section>
            {/* SERVICE SECTION ENDS HERE*/}


            {/* REVIEW SECTION STARTS HERE*/}
            <section>
                <ReviewsSection></ReviewsSection>
                <AddReview

                ></AddReview>
            </section>
            {/* REVIEW SECTION ENDS HERE*/}
        </div>
    );
};

export default ServiceDetails;