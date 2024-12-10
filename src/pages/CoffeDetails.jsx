import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addFavourite, getAllFav } from '../components/Utils';

const CoffeDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [coffee, setCoffee] = useState({})
    const [btn, setBtn] = useState(false)

    useEffect(() => {
        const singleData = data.find(coffee => coffee.id === parseInt(id))
        setCoffee(singleData)
        const favourite = getAllFav()
        const isExits = favourite.find(item => item.id == singleData.id)
        if (isExits) {
            setBtn(true)
        }
    }, [data, id]);

    const handleFavourite = coffee => {
        addFavourite(coffee)
        setBtn(true)
    }

    return (
        <div>
            <p>id no: {coffee.id}</p>
            <h2>
                Coffee Details: {coffee.description}
            </h2>
            <button
                disabled={btn}
                onClick={() =>
                    handleFavourite(coffee)}
                className='btn btn-warning'
            >Add to Favourite</button>
        </div>
    );
};

export default CoffeDetails;