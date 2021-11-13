import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

import About from './About';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;