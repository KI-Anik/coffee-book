import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    // const obj = useParams()
    const data = useLoaderData()
    const { category } = useParams()
    const [coffees, setCoffees] = useState([])

    useEffect(()=>{
        const filterByCategory = [...data].filter(
            coffee => coffee.category === category
        )
        setCoffees(filterByCategory)
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee} ></Card>)
            }
        </div>
    );
};

export default CoffeeCards;