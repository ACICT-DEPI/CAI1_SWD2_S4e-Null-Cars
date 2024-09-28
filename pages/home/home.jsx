import React from 'react';
import Slider from '../../components/slider'
import CarSearch from "../../components/car-search"
import CarOffers from '../../components/car-offers';
import CustomerReview from '../../components/customer-reviews';

const Home = () => {

    return (
        <div id="homepage">
            <Slider/>
            <CarSearch/>
            <CarOffers/>
            <CustomerReview/>

        </div>
    );
};
export default Home;