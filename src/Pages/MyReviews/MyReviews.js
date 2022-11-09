import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Reviews from './Reviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const [reviews, setReview] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    // console.log(reviews);

    return (
        <div>
            <h1>My reviews {reviews.length}</h1>
            <div className='grid lg:grid-cols-2 '>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default MyReviews;