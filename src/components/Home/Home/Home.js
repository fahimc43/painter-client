import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Project></Project>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;