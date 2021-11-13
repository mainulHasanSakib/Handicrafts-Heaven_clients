import React from "react";
import img from '../../img/login.jpg'
import { useForm  } from "react-hook-form";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { Alert } from "react-bootstrap";

const Login =()=>{


    const { register, handleSubmit, reset } = useForm();
    const {user, loginUser} = useAuth();
    const location= useLocation()
    const history = useHistory();
  const onSubmit = data => {
    loginUser(data.Email, data.Password , location, history)
     reset()   
  }
   
  return (<div className="container">
<div className="col-12">
                    <h2 className="fw-bold my-5">
                    Please Log In
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
      
      
      <input className="btn btn-danger btn-lg my-3 " value="Log In" type="submit" /><br/>
      <NavLink to="/register">
        <button type="button" className="btn btn-outline-danger">   New Customer? Please Register.</button>
     </NavLink>
    </form>
    </div>
         
      </div>
      {user?.email && <Alert severity="success">Login successfully!</Alert>}
  </div>



    
  );
}
  



export default Login;
