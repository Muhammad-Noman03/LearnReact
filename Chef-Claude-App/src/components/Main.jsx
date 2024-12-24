import React from 'react'
import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

const Main = () => {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = useState(false)



    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipe() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main className="p-4 sm:p-6 md:p-8 bg-[#e0e0db] min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 sm:h-10">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="w-full sm:w-auto border border-gray-300 rounded-md p-2.5 shadow-sm flex-grow min-w-[150px] max-w-full sm:max-w-[400px]"
                />
                <button className="w-full sm:w-[150px] font-inter rounded-md border-none bg-[#141413] text-[#FAFAF8] text-sm font-medium p-2.5 before:content-['+'] before:mr-1">
                    Add ingredient
                </button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipe={toggleRecipe} />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}

export default Main