import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        axios.post('http://localhost:5000/products', data)
        .then(res =>{
            console.log(res)
            if(res.data.insertedId){
                alert('Product added successfully')
                reset()
            }
        })
    }
    return (
        <div className="container">
            <div className="col-12">
                    <h2 className="fw-bold my-5">
                    Add A Gift Box
                    </h2>
                    </div>

                    <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
      
      <input className="mt-3 shadow border-danger" type="text"  {...register("name")} placeholder="Product Name" /> <br/>
      <input  className="mt-3 shadow border-danger"   {...register("img")} placeholder="Image Url" /><br/>
      <textarea className="mt-3 shadow border-danger"    {...register("description")} placeholder="Description"/><br/>
      <input  className="my-3 shadow border-danger" type="number" {...register("price")}  placeholder="Product Price"/><br/>
      <input className="btn btn-danger btn-lg my-3 " value='Add Product' type="submit" />
    </form>

        </div>
    );
};

export default AddProducts;