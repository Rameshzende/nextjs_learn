export default function RecipeItemDetails({recipeDetails}) {
    return (
        <div>
          <div className="p-6 lg:max-w-6xl max-2-xl mx-auto">
               <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                      <img src={recipeDetails.image} alt={recipeDetails.name} className="object-cover rounded-sm w-4/5 object-top" />
                    </div> 

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{recipeDetails?.name}</h2>
                        <div className="mt-5">
                            <p className="text-2xl text-gray-600">{recipeDetails?.mealType[0]}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-xl text-gray-800">{recipeDetails?.cuisine}</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                                  {
                                    recipeDetails?.ingredients.map((ingredient, index) => {
                                        return <li key={index}>{ingredient}</li>
                                    })
                                  }
                            </ul>
                        </div>
                    </div>
               </div>
          </div>
        </div>
    )
}