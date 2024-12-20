import React, { useState, useEffect } from 'react';
import './styles.css';
import Reviews from './components/Reviews';

const App = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/reviews')
            .then((response) => response.json())
            .then((data) => setReviews(data.reviews))
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="App">
            <h1>Google Reviews Management</h1>
            <Reviews reviews={reviews} />
        </div>
    );
};

export default App;
