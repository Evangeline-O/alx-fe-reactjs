
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
      <Routes>
        {/* Home page shows add form and recipe list */}
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        
        {/* View a single recipe */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        
        {/* Edit a recipe */}
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}
