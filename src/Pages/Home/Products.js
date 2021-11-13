import React, { useEffect, useState } from 'react';
import Product from '../Product';

const Products = () => {
    const[products, setProduts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
            const sliceData =data.slice(0,6)
            setProduts(sliceData)});
        
            
            
    } , [])
    return (
        
            
        <div className="container">
<div className="col-12">
                    <h2 className="fw-bold my-5">
                   Best Selling Gift Box
                    </h2>
                    </div>
            <div className="row d-flex">
                {
                products.map(product => <Product
                    key={product._id}
                   product={product}
                > </Product>)
            }
            </div>
            
        </div>
        
    );
};

export default Products;