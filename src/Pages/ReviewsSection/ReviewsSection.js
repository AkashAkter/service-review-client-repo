import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewsSection = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${reviews.service}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user?.email])

    // console.log(reviews);
    return (
        <div>
            {
                reviews.map(review => <>
                    <div>
                        <h1>{review.serviceName}</h1>
                    </div>
                </>)
            }
        </div>
    );
};

export default ReviewsSection;