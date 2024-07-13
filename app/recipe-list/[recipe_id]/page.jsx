import RecipeItemDetails from "@/components/recipe-list/recipe-details";

async function fetchRecipeDetails({ recipe_id }) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${recipe_id}`)
    const data = await response.json();
    return data;
  } catch {
    console.log('Error fetching data')
  }
}
export default async function RecipeDetails({ params }) {
  const data = await fetchRecipeDetails(params)
  
  return (
    <div>
       <RecipeItemDetails recipeDetails={data}/>
    </div>
  );
}