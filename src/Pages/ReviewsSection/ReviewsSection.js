import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewsSection = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            reviews
        </div>
    );
};

export default ReviewsSection;