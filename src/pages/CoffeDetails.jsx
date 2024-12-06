import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addFavourite, getAllFav } from '../components/Utils';

const CoffeDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [coffee, setCoffee] = useState({})

    useEffect(() => {
        const singleCoffee = data.find(coffee => coffee.id === parseInt(id))
        setCoffee(singleCoffee)
    }, []);

    const handleFavourite = coffee => {
        addFavourite(coffee)
    }

    return (
        <div>
            <p>id no: {coffee.id}</p>
            <h2>
                Coffee Details: {coffee.description}
            </h2>
            <button onClick={() => handleFavourite(coffee) } className='btn btn-warning'>Add to Favourite</button>
        </div>
    );
};

export default CoffeDetails;