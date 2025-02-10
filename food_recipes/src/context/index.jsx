import { createContext, useEffect, useState} from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [RecipeDetails, setRecipeDetails] = useState(null);
    const [favourites, setFavourites] = useState([]); // renamed to lowercase
 
    async function fetchRecipes() {
        try {
            setLoading(true);
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json(); 
            console.log(data);
            if (data.error) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setRecipes(data.data.recipes);
            setError(null);
            setLoading(false);
         
        } catch (e) {
            console.error(e);
            setError('An error occurred while fetching data');
            setLoading(false);
        }
    } 

function handleFavourites(recipeID) {
    // Use the lowercase 'favourites' state.
    let index = favourites.findIndex((item) => item.id === recipeID);
    if (index === -1) {
        // Try to find the recipe in the recipes array.
        let recipe = recipes.find((item) => item.id === recipeID);
        // If not found there, use RecipeDetails as a fallback.
        if (!recipe && RecipeDetails && RecipeDetails.id === recipeID) {
            recipe = RecipeDetails;
        }
        // Only update favourites if recipe is defined.
        if (recipe) {
            setFavourites([...favourites, recipe]);
        } else {
            console.error("Recipe not found in recipes or RecipeDetails");
        }
    } else {
        // If it already exists, remove it.
        const newFavourites = [...favourites];
        newFavourites.splice(index, 1);
        setFavourites(newFavourites);
    }
    console.log(favourites);
}


    useEffect(() => {
        if (searchParam) {
            fetchRecipes();
        }
    }, [searchParam]);

    return (
        <GlobalContext.Provider value={{ 
            searchParam, 
            setSearchParam, 
            recipes, 
            loading, 
            error, 
            RecipeDetails, 
            setRecipeDetails, 
            favourites, 
            handleFavourites 
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
