import React from 'react';
import { Card } from 'react-bootstrap';

const SingleTestimonial = ({review}) => {
    const { name, comment, rating} = review;
    return (
        <div className="col-md-4 py-3 my-3">
            <Card>
            <div >
     
       
       
  
    
    <h3 className="text-danger mt-2">{name}</h3>
 
    <h5>Comment: {comment}</h5>
    <p className="p-3">Rating : {rating}</p>
   
   
</div>
</Card>
        </div>
    );
};

export default SingleTestimonial;