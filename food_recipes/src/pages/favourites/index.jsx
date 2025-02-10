import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe_item"

export default function Favourites() { 
    const {favourites, setFavourites} = useContext(GlobalContext);
    return (
        <div>
        <h1>Favourites</h1>
        <button onClick={() => console.log(favourites)}>current favourites</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-5">
        {
            favourites && favourites.length > 0 && favourites.map((item, index) => {
                console.log(item);
                return <RecipeItem key={index} item={item}/>
            })
        }   
        </div>  
        </div>
    )
    }