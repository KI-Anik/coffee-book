import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFav } from '../components/Utils';
import Card from '../components/Card';

const Dashboard = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favourite = getAllFav()
        setCoffees(favourite)
    }, [])

    return (
        <div>
            <Heading
                title='Welcome to Dashboard'
                subTitle=' Manage coffees that you have previously added as favorite. You can view or remove them from here'
            ></Heading>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6'>
                {
                    coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} ></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;