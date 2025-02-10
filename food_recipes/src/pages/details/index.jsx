import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";  

export default function Details() {
    const { id } = useParams();
    const { RecipeDetails, setRecipeDetails, handleFavourites, favourites } = useContext(GlobalContext);

    async function fetchRecipeDetails() {
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();
            console.log(data);
            setRecipeDetails(data.data.recipe);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (id) {
            fetchRecipeDetails();
        }
    }, [id]);

    return (
        <div>
            <h1 className="text-color">Details</h1>
            {RecipeDetails ? (
                <>
                    <img src={RecipeDetails.image_url} alt={RecipeDetails.title} className="w-64 h-64 object-cover rounded-lg mb-4"/>
                    <h1 className="text-l font-semibold mt-2 text-gray-800">{RecipeDetails.title}</h1>
                    {favourites.some(recipe => recipe.id === RecipeDetails.id) ? (
                        <button 
                            onClick={() => handleFavourites(RecipeDetails.id)} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Remove from favourites
                        </button>
                    ) : (
                        <button 
                            onClick={() => handleFavourites(RecipeDetails.id)} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Add to favourites
                        </button>
                    )}
                    <ul>
                        {RecipeDetails.ingredients && RecipeDetails.ingredients.length > 0 
                            ? RecipeDetails.ingredients.map((item, index) => (
                                <li key={index}>
                                    {item.quantity} {item.unit} {item.description}
                                </li>
                              ))
                            : null}
                    </ul>
                </>
            ) : null}
        </div>
    );
}
