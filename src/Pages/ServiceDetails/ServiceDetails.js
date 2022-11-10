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

    const { user, loading } = useContext(AuthContext);
    // console.log(user);

    const service = useLoaderData();
    // console.log(service.more_images);
    const moreImage = service.more_images;

    // console.log(service.reviews);
    const reviews = service.reviews;

    if (loading) {
        return <div className="text-center my-20">
            <div role="status">
                <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

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

                        <img className='h-full' src={moreImage?.img1} alt="" />
                        <img className='h-full' src={moreImage?.img2} alt="" />
                        <img className='h-full' src={moreImage?.img3} alt="" />
                        <img className='h-full' src={moreImage?.img4} alt="" />
                        <img className='h-full' src={moreImage?.img5} alt="" />
                        <img className='h-full' src={moreImage?.img6} alt="" />

                    </div>
                </div>

            </section>
            {/* SERVICE SECTION ENDS HERE*/}


            {/* REVIEW SECTION STARTS HERE*/}
            <section>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-5 px-20 lg:px-40 py-10'>
                    {
                        [...reviews].reverse().map(review => <ReviewsSection
                            key={review._id}
                            review={review}
                        ></ReviewsSection>)
                    }
                </div>

                {
                    user?.email ?
                        <AddReview
                        ></AddReview>
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