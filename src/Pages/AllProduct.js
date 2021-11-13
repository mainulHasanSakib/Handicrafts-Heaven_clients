import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import AProduct from './AProduct';



const AllProduct = () => {
    const[products, setProduts]=useState([]);
    useEffect(()=>{
        fetch('https://nameless-basin-43410.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            
            setProduts(data)});
        
            
            
    } , [])
    return (
        <>
        <Header></Header>
        <div className="container">
        <div className="col-12">
                            <h2 className="fw-bold my-5">
                            Gift Box
                            </h2>
                            </div>
                    <div className="row d-flex">
                        {
                        products.map(product => <AProduct
                            key={product._id}
                           product={product}
                        > </AProduct>)
                    }
                    </div>
                    
                </div>
                </>
    );
};

export default AllProduct;