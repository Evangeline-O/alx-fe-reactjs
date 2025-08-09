import React from 'react';
import { useRecipeStore } from './recipeStore';

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> — {recipe.description}
              <button
                onClick={() =>
                  isFavorite
                    ? removeFavorite(recipe.id)
                    : addFavorite(recipe.id)
                }
              >
                {isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
