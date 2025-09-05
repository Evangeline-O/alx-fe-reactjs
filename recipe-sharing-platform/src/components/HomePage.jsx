import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(recipeData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading recipes...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Added hover effect to the title */}
      <h1 className="text-3xl font-bold text-center mb-8 transition-colors duration-300 hover:text-blue-600">
        Recipe Sharing Platform
      </h1>
      
      {/* Added rounded and shadow classes to the grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg shadow-lg p-6 bg-gray-50">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;