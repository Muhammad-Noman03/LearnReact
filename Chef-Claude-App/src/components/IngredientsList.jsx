import React from 'react'



const IngredientsList = (props) => {

  const ingredientList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section className="mt-6 sm:mt-8">
      <h2 className="text-lg sm:text-xl font-semibold">Ingredients on hand:</h2>
      <ul className="list-disc pl-5 mt-3 sm:mt-4 space-y-2" aria-live="polite">
        {ingredientList}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-100 rounded-md">
          <div>
            <h3 className="text-base sm:text-lg font-semibold">Ready for a recipe?</h3>
            <p className="mt-2 text-sm sm:text-base">Generate a recipe from your list of ingredients.</p>
          </div>
          <button
            onClick={props.getRecipe}
            className="w-full sm:w-[150px] mt-4 p-2 font-inter rounded-md border-none bg-[#979769] text-[#FAFAF8] text-lg sm:text-xl font-medium"
          >
            Get a recipe
          </button>
        </div>)}
    </section>
  )
}

export default IngredientsList