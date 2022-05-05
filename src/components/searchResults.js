import { useState, useEffect } from "react";

function SearchResults() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20noodle%20soup&app_id=ed447025&app_key=%202e737a28d4630a36035fa138d3da207d'
            let response = await fetch(url);
            let data = await response.json();
            let allRecipeNames = data.hits.map((hit) => hit.recipe)
            setRecipes(allRecipeNames)
            console.log(data.hits[0].recipe.label)
        }
            fetchMyAPI()
        }, [])
        
        const allNames = recipes.map((item) => item.recipe.label)
        let allNamesList = allNames.map((name)=> <li>{name}</li>)
        
        return (
        <div>
            {allNamesList}
        </div>
    );
}

export default SearchResults;


//'https://api.edamam.com/api/recipes/v2?type=public&q=chicken%20noodle%20soup&app_id=ed447025&app_key=%202e737a28d4630a36035fa138d3da207d'
