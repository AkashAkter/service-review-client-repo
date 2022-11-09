import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewsSection = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceName=${reviews}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    // console.log(reviews);
    return (
        <div>

        </div >
    );
};

export default ReviewsSection;