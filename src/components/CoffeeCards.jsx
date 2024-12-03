import React from 'react';
import { useParams } from 'react-router-dom';

const CoffeeCards = () => {
    // const obj = useParams()

    const {category} = useParams()
    console.log(category)
    return (
        <div>
            coffee cards : {category}
        </div>
    );
};

export default CoffeeCards;