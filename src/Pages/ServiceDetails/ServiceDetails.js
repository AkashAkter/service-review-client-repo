import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import AddReview from '../AddReview/AddReview';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {

    useTitle('Service Details');

    const { user } = useContext(AuthContext);
    // console.log(user);

    const service = useLoaderData();
    // console.log(service.more_images);
    const { img1, img2, img3, img4, img5, img6 } = service.more_images;

    return (
        <div>

            {/* SERVICE SECTION STARTS HERE*/}
            <section className='m-28'>

                <div className="lg:flex justify-evenly text-white shadow-2xl shadow-indigo-400/100 py-28 p-10">

                    <div className="lg:w-1/2">
                        <PhotoProvider>
                            <PhotoView src={service.image}>
                                <img src={service.image} alt="Shoes" className="rounded-3xl " />
                            </PhotoView>
                        </PhotoProvider>
                    </div>

                    <div className="lg:w-1/2">
                        <h1 className='text-center text-3xl'>{service.serviceName}</h1>
                        <p className='m-5 text-justify'>{service.details}</p>
                        <p className='text-center text-2xl mt-8'>PRICE: ${service.price}</p>
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
                <ReviewsSection

                ></ReviewsSection>
                {
                    user?.email ?
                        <AddReview></AddReview>
                        :
                        <>
                            <div className='text-center text-white text-2xl my-10 font-bold'>
                                <h1>For Add Your Own Review <br /> Please Login
                                    <Link to='/signIn'><span className='text-blue-500 hover:underline'> Here</span></Link>
                                </h1>
                            </div>

                        </>
                }

            </section>
            {/* REVIEW SECTION ENDS HERE*/}
        </div>
    );
};

export default ServiceDetails;