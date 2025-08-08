
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleUpdate = () => {
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold">Edit Recipe</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="block mb-2 p-1" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="block mb-2 p-1" />
      <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-1">Update</button>
    </div>
  );
}
