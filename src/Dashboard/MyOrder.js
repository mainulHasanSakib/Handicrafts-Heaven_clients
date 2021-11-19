import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const MyOrder = () => {
    
    const[myorders, setMyorders]=useState([]);
    useEffect(()=>{
        fetch(`https://nameless-basin-43410.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>{
            
            setMyorders(data)});
        
            
            
    } , [])
    return (
        <div className="container">
        <div className="col-12">
                            <h2 className="fw-bold my-5">
                      MY Order
                            </h2>
                            </div>
                    <div className="row d-flex">
                        {
                       myorders.map(myorder => 
                        <div className="col-md-4 py-3 my-3">
                        <Card>
                        <div >
                 
                   
                   
              
                
                <h3 className="text-danger mt-2">{myorder.name}</h3>
             
                <h5>Order Name: {myorder.orderName}</h5>
                <h5>Total: {myorder.quantity}</h5>
                <p className="p-3">Address: {myorder.Address}</p>
               
               
            </div>
            </Card>
            
                    </div>
                    )}
                </div>
                </div>
    );
};

export default MyOrder;