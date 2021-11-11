import React from 'react';
import img from '../../img/about.jpg'

const About = () => {
    return (
        <div>
            <div className="container" id="about">
                <div className="col-12">
                    <h2 className="fw-bold my-5">
                    Behind The HandiCraft Heaven
                    </h2>
                    </div>
                <div className="row d-flex">

                    <div className="col-12 col-lg-6 col-md-12 my-5">
                        <img src={img} className="img-fluid w-75 rounded shadow" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 my-5 pt-3 px-3 border border-dark rounded">
                  <p className="fs-5 text-start">
                We started HandiCrafts Heaven in 2019 with a clear mission: to bring gifting into the 21st century—creating stronger relationships through personal gifts, powered by the simplest user experiences.

After college, a close friend got sick and we realized the lack of options for being “there” for her when we couldn't be physically. We wanted something that went beyond flowers and the typical overpriced (and wasteful) gift basket. Our standards were high: we wanted something presentable, personal, and with purposeful product that was simple to send. As we explored this need, we discovered that others wanted a modern and seamless gifting experience, too.
It didn't exist, so we built it.
                </p> 
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;