import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [coffee, setCoffee] = useState({})

    useEffect(()=>{
        const singleCoffee = data.find(coffee => coffee.id === parseInt(id))
        setCoffee(singleCoffee)
    },[])
    return (
        <div>
            Coffee Details: {coffee.description}
        </div>
    );
};

export default CoffeDetails;