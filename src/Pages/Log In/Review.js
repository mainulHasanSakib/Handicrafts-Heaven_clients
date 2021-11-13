import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        axios.post('https://nameless-basin-43410.herokuapp.com/reviews', data)
        .then(res =>{
            console.log(res)
            if(res.data.insertedId){
                alert('Review added successfully')
                reset()
            }
        })
    }
    return (
        <div className="container">
            <div className="col-12">
                    <h2 className="fw-bold my-5">
                   Make A Comment
                    </h2>
                    </div>

                    <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
      
      <input className="mt-3 shadow border-danger" type="text"  {...register("name")} placeholder="Your Name" /> <br/>
      
      <textarea className="mt-3 shadow border-danger"    {...register("comment")} placeholder="Comment"/><br/>
      <input
  type="number"
  {...register('rating', {
    max: 5
  })}
/>
      <br/>
      <input className="btn btn-danger btn-lg my-3 " value='Add Review' type="submit" />
    </form>

        </div>
    );
};

export default Review;