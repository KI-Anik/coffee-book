import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Heading title='Browse Coffees by Category' subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>
            {/* categories tab section */}
            <Categories categories={categories} ></Categories>
            <Outlet></Outlet>
            {/* dynamic nested component */}
        </div>
    );
};

export default Home;