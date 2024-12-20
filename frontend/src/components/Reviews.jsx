import React from 'react';

const Reviews = ({ reviews }) => (
    <div>
        <h2>Reviews</h2>
        {reviews.length ? (
            reviews.map((review, index) => (
                <div key={index} className="review-card">
                    <h3>{review.author_name}</h3>
                    <p>{review.text}</p>
                    <p>Rating: {review.rating}</p>
                </div>
            ))
        ) : (
            <p>No reviews available.</p>
        )}
    </div>
);

export default Reviews;
