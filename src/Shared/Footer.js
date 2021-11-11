import React from 'react';
import {  FaFacebook, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row d-flex p-5 justify-content-evenly text-white">
                <div className="col-12 col-lg-4 col-md-6   ">
                    <h3 className="text-start">HandiCrafts Heaven</h3>
                    <p className=" text-start">HandiCrafts Heaven is your go-to for gifting.  Shop personalized and<br /> custom gift boxes to friends and family. Shop pre-packed curations,<br />  Build a custom gift box, or customize corporate gift boxes.</p>
                </div>
                <div className="col-12 col-lg-4 col-md-6 ">
                    <h3>Contact</h3>
                   <p >  <FaPhone/> +880 1885-222293 <br />

                       <a href="https://www.facebook.com/HandiCraftsHeavenn" 
                       style={{textDecoration:"none",
                                color:"white"
                    }}
                    > <FaFacebook /> Facebook</a></p> 
                 
                    
                    
                      
                </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-12">
                    <p className="fw-bold text-white ">
                    © 2021-22 HandiCrafts Heaven. Developed by : Mainul Hasan Sakib
                    </p>
                    </div>
            </div>
        </div>
    );
};

export default Footer;