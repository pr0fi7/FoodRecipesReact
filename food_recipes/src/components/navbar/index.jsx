import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {

    const {searchParam, setSearchParam} = useContext(GlobalContext);
    console.log(searchParam);

    return (
        <div className="sticky top-0">
            <div className="flex justify-between p-4 bg-gray-200 text-xl mt-0 space-x-4">
                <NavLink to="/">
                    <h1 className="">Food recipes</h1>
                </NavLink>

                <input type="text" placeholder="Search for recipes" value={searchParam} className="border-2 border-gray-300 p-1 rounded-md" onChange={(event) => setSearchParam(event.target.value)}/>

                <NavLink to="/favourites">
                    <h1 className="">Favourites</h1>
                </NavLink>
            </div>    
        </div>
    )
}