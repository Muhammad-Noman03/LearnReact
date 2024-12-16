import React from 'react'
import { useState } from 'react'

const Main = () => {
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients, setIngredients] = useState([])

    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }




    return (
        <main className="p-[30px_30px_10px] bg-[#f5f5f0] h-[70vh]">
            <form className="flex justify-center gap-3" onSubmit={handleSubmit}>
                <input
                    className="border border-gray-300 rounded-md p-2.5 shadow-sm flex-grow min-w-[150px] max-w-[400px]"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="font-inter rounded-md border-none bg-[#141413] text-[#FAFAF8] w-[150px] text-sm font-medium before:content-['+'] before:mr-1">
                    Add ingredient
                </button>
            </form>
            <ul className="list-disc pl-5 mt-5 space-y-2 font-semibold">
                {ingredientList}
            </ul>
        </main>
    )
}

export default Main