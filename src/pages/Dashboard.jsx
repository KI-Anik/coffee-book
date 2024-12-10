import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFav, removeFav } from '../components/Utils';
import Card from '../components/Card';

const Dashboard = () => {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        const favourites = getAllFav()
        setCoffees(favourites)
    }, [])

    const handleRemove = (id) => {
        removeFav(id)
        const favourites = getAllFav()
        setCoffees(favourites)
        console.log(favourites)
    }

    return (
        <div>
            <Heading
                title='Welcome to Dashboard'
                subTitle=' Manage coffees that you have previously added as favorite. You can view or remove them from here'
            ></Heading>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6'>
                {
                    coffees.map((coffee) => <Card
                        key={coffee.id}
                        coffee={coffee}
                        handleRemove={handleRemove}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;