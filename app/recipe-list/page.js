import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
    try {
        const response = await fetch(`https://dummyjson.com/recipes`);
        const data = await response.json();
        return data?.recipes;
    } catch {
        console.log('Error fetching data')
    }

}

export default async function Recipes() {
    const data = await fetchListOfRecipes()
    return (
        <div>
          <RecipeList recipeList={data}/>
        </div>
    )   
}