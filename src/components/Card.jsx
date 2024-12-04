import React from 'react';

const Card = ({coffee}) => {
    const {name,image,category} = coffee
    return (
        <div>
            {name}
        </div>
    );
};

export default Card;