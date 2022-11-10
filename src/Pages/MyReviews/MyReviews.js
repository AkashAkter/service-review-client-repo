import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Reviews from './Reviews';

const MyReviews = () => {

    useTitle('MyReviews');

    const { user } = useContext(AuthContext);
    // console.log(user);

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    console.log(reviews);

    return (
        <div>

            {
                reviews.length === 0 ?
                    <h1 className='text-center text-white lg:m-40 text-6xl'>No Reviews Were Added</h1>

                    :
                    <div className='grid lg:grid-cols-2 justify-items-center gap-10 my-20 lg:mx-48'>
                        {
                            [...reviews].reverse().map(review => <Reviews
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></Reviews>)
                        }
                    </div>

            }


        </div>
    );
};

export default MyReviews;