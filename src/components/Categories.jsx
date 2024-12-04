import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(cate => 
                <NavLink key={cate.category}
                 to={`/category/${cate.category}`}
                  role="tab"
                   className={({isActive})=>
                    `tab text-2xl font-thin ${isActive? 'tab-active' : ''}` }>
                        {cate.category}
                    </NavLink>
                )
            }
        </div>
    );
};

export default Categories;