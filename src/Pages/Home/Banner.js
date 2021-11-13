import React from 'react';
import img from '../../img/hhh_n.jpg'
import './Home.css'
const Banner = () => {
    return (
        <div className="container-fluid bg-banner min-vh-100"   id="home">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center py-5">
               <div className="col-12 col-lg-6 col-md-12 text-lg-start  ">
                   <h1 className="fw-bolder text-uppercase ">Crafting  From<br />  Our Hand<br />  To  Yours</h1>
                   <p className="fs-3">A unique collection  of paperwork gifts box <br />  in friendly budget ..</p>
                 
                   
               </div>
               <div className="col-12 col-lg-6 col-md-12 mt-5  ">
                   <img src={img} className="img-fluid my-5 w-75 shadow rounded" alt="Handicraft" />
                   </div>
               </div> 
               
            </div>
            
           
        </div>
    );
};

export default Banner;