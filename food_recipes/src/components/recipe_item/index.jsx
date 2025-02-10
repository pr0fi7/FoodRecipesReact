import React from 'react';
import { Link } from 'react-router-dom';



export default function RecipeItem({ item }) {

    return (
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img src={item.image_url} alt={item.title} className="w-64 h-64 object-cover rounded-lg mb-4"/>
            <h1 className="text-l font-semibold mt-2 text-gray-800">{item.title}</h1>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" > 
            <Link to={`/recipe/${item.id}`}> View recipe </Link>
            </button>
        </div>
        
    );
}

