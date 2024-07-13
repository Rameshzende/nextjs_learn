import Link from "next/link"
import { Card, CardContent } from "../ui/card"

export default function RecipeList({ recipeList }) {
    return (
        <div>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <div className="text-4xl font-bold text-gray-800 mb-12">
                    Recipes
                </div>
                <Link href={'/'} className="text-blue-500 hover:underline">
                    Go Home
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {
                        recipeList && recipeList.length > 0 && recipeList.map((recipe, index) => {
                            return (
                                <Link href={`/recipe-list/${recipe.id}`} key={index}>
                                    <Card>
                                        <CardContent className="bg-white md-rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                            <div className="w-full aspect-w-16 aspect-h-18 lg:h-80">
                                                <img src={recipe.image} alt={recipe.name} className="object-cover w-full h-full object-top" />
                                            </div>

                                            <div className="text-lg font-bold text-gray-600 mt-4">
                                                {recipe.name}
                                            </div>

                                            <div>
                                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                                    <p className="text-lg text-gray-600">
                                                        Rating: {recipe.rating}
                                                    </p>
                                                    <div className="ml-auto">
                                                        <p className="text-lg text-gray-600">
                                                            Rating: {recipe.cuisine}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}