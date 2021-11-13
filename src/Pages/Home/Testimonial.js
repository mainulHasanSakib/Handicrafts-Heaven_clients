import React, { useEffect, useState } from 'react';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
    const[reviews, setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://nameless-basin-43410.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
            
            setReviews(data)});
        
            
            
    } , [])
    return (
        <div className="container">
<div className="col-12">
                    <h2 className="fw-bold my-5">
              Testimonial
                    </h2>
                    </div>
            <div className="row d-flex">
                {
                reviews.map(review => <SingleTestimonial
                    key={review._id}
                   review={review}
                />)
            }
            </div>
            
        </div>
    );
};

export default Testimonial;