
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/chatbot" element={<Chatbot />} />
  ...
</Routes>