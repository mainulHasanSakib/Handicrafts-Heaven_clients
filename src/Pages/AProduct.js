import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AProduct = ({product}) => {
    const {_id, name, img, description, price} = product;
    return (
        <div className="col-md-4 py-3 my-3">
        <Card className="shadow-lg">
        <Card.Img  variant="top" src={img} />
       
  
    
    <h3 className="text-danger mt-2">{name}</h3>
 
    <h5>Price: ${price}</h5>
    <p className="p-3">{description}</p>
    <Link to={`/order/${_id}`}>
        <button className="btn btn-danger my-3">Order Now </button>
    </Link>
    </Card>
</div>
    );
};

export default AProduct;