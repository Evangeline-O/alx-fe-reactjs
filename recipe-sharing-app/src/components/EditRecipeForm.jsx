// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 border p-4 rounded">
      <h3 className="font-semibold mb-2">Edit Recipe</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block mb-2 p-2 border rounded w-full"
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block mb-2 p-2 border rounded w-full"
        placeholder="Description"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded">
        Update
      </button>
    </form>
  );
}
