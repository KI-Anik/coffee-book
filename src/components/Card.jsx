import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { removeFav } from './Utils';


const Card = ({ coffee, handleRemove }) => {

    const { pathname } = useLocation()

    const { id, name, image, category, popularity, type, origin, rating } = coffee
    return (
        <div className='flex '>
            <Link to={`/coffee/${id}`}
                className='transition hover:scale-105'
            >

                <div className="card bg-base-100 shadow-xl">
                    <figure className='h-48 w-full'>
                        <img
                            src={image}
                            alt="coffee cup" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Category: {category}</p>
                        <p>Type: {type} </p>
                        <p> Origin: {origin} </p>
                        <p>Popularity: {popularity} </p>
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </Link>
            {
                pathname === '/dashboard' && (<p onClick={() => handleRemove(id)} className=' absolute rounded-full p-3 bg-yellow-300 cursor-pointer'><FaTrashAlt></FaTrashAlt></p>)
            }
        </div>
    );
};

export default Card;