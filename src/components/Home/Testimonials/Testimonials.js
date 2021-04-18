import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import './Testimonials.css';


const Testimonials = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fast-earth-12877.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setReviews(data)
            })
    }, [])
    return (
        <section className="testimonials mt-5 pt-5">
            <div className="text-center">
                <h5 style={{ color: "#BB2D3B" }}>Testimonials</h5>
                <h2 style={{ color: "#4C4B7D", fontWeight: "700" }}>What Our clients Say About Illustration</h2>
            </div>
            <div className="container">
                {isLoading &&
                    <div className="d-flex justify-content-center pt-3">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        reviews.map(review => <TestimonialDetail key={review._id} review={review}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;