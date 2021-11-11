import React from 'react';
import img from '../../img/login.jpg'
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user, registerUser} = useAuth();
    const history = useHistory();
  const onSubmit = data => {
   registerUser(data.Email, data.Password , history)
   reset()
  };
   
  return (<div className="container">
<div className="col-12">
                    <h2 className="fw-bold my-5">
                    Please Register
                    </h2>
                    </div>
      <div className="row d-flex align-items-center justify-content-center my-5 ">
      <div className="col-12 col-md-12 col-lg-6 my-5">
          <img className="img-fluid w-100 rounded-circle shadow-lg" src={img} alt="handicrafts" />
      </div>
          <div className="col-12 col-md-12 col-lg-6 my-5 ">
              <form className="bg-light py-5 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
      
              
      <input className="mt-3 shadow border-danger" type="email" placeholder="Type Your Email" {...register("Email")} />
      <br />
      <input className="my-3 shadow border-danger" placeholder="Type Your Password" type="password" {...register("Password")} />
      <br />
     
      
      <input className="btn btn-danger btn-lg my-3 " value="Register" type="submit" /><br/>
      <NavLink to="/login">
        <button type="button" className="btn btn-outline-danger">   Already Registerred? Please Log in.</button>
     </NavLink>
    </form>
    
    </div>
         {
        user?.Email && <div className="alert alert-info" role="alert">
        Account Created!
      </div>
      }
      </div>
  </div>



    
  );
}

export default Register;