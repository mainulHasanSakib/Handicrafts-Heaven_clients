import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './Hook/useAuth';

const Order = () => {
    const {orderId}=useParams()
    const { register, handleSubmit,reset  } = useForm();
    const [products, setProducts]=useState([]);
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data)
        reset()
    }
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    } ,[])

    const foundProduct = products.find((product)=>product._id == orderId )
    return (
        <div className="container">
            <div className="col-12">
                            <h2 className="fw-bold my-5">
                            Confirm Order :{foundProduct?.name}
                            </h2>
                            </div>

                            <div className="row d-flex  justify-content-center my-5 ">
           
            <div className="col-md-7 bg-info rounded shadow">
                <h2 className="text-danger fw-bolder my-5">  Product: {foundProduct?.name} </h2>
        <h2 className="text-danger fw-bolder my-5">  Price:  {foundProduct?.price} </h2>
        <p className="fw-bold border border-3 border-danger p-2 my-5 rounded">{foundProduct?.description}</p>
                
                    <img className="w-50 img-fluid rounded my-3" src={foundProduct?.img} alt="" />
                    
                </div>
                <div className="col-md-5">
                <h1 className="text-center my-5 py-5 text-danger fw-bolder">Confirm Order </h1>
            <form className="bg-light py-5 shadow-lg"  onSubmit={handleSubmit(onSubmit)}>
     
      <input className="p-3 d-flex m-auto my-3 shadow border-danger" placeholder="name"  {...register("name", { required: true })} />
     
      <input className="p-3 d-flex m-auto my-3 shadow border-danger" placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
      <input className="p-3 d-flex  m-auto my-3 shadow border-danger" placeholder="Order Code" defaultValue={orderId} {...register("Order Id", { required: true })} />
      
      
      <input className="p-3 d-flex   m-auto my-3 shadow border-danger" placeholder="Address"{...register("Address", { required: true })} />
      <input className="p-3 d-flex   m-auto my-3 shadow border-danger" placeholder="Quantity"{...register("quantity", { required: true })} />
      
      
      
      <input className="btn btn-outline-danger my-3" type="submit" />
    </form>
                </div>
        
        </div> 
        </div>
    );
};

export default Order;