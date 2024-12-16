import React from 'react'

const Main = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get('ingredient')
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return (
        <main className="p-[30px_30px_10px] bg-[#f5f5f0] h-[70vh]">
            <form className="flex justify-center gap-3" onSubmit={handleSubmit}>
                <input
                    className="border border-gray-300 rounded-md p-2.5 shadow-sm flex-grow min-w-[150px] max-w-[400px]"
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
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