import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(category => <Link key={category.id} to={'/category'} role="tab" className="tab">{category.category}</Link>
                )
            }
        </div>
    );
};

export default Categories;