import RecipeItem from "../../components/recipe_item"
import {useContext} from 'react'
import {GlobalContext} from '../../context/index'

export default function Home() {
    const {recipes, loading} = useContext(GlobalContext);

    return (
        <div>
        <h1>Home</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-5">
        {
            recipes && recipes.length > 0 && recipes.map((item, index) => {
                return <RecipeItem key={index} item={item}/>
            })
        }
        </div>
        </div>
    )
    }   