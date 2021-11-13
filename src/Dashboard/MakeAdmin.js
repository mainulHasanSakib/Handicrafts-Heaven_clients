import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        
        axios.put('https://nameless-basin-43410.herokuapp.com/users/admin', data)
        .then(res =>{
            
            if(res.data.modifiedCount){
                alert('Admin added successfully')
                reset()
            }
        })
            
            }
        
    
    return (
        <div className="container">
            <div className="col-12">
                    <h2 className="fw-bold my-5">
                  Make AN ADMIN
                    </h2>
                    </div>

                    <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
      
                    <input className="mt-3 shadow border-danger" type="email" placeholder="Type Admin Email" {...register("email")} /> <br/>
                    <input className="btn btn-danger btn-lg my-3 " value="Make Admin" type="submit" /><br/>
    </form>

        </div>
    );

}

export default MakeAdmin;