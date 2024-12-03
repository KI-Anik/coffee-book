import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(cate => 
                <Link key={cate.category}
                 to={`/category/ ${cate.category}`}
                  role="tab"
                   className="tab">
                    {cate.category}</Link>
                )
            }
        </div>
    );
};

export default Categories;