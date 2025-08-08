
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} className="mb-2">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-600 underline">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
