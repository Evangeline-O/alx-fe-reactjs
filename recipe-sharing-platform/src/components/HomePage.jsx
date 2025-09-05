import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
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
      <h1 className="text-3xl font-bold text-center mb-8 transition-colors duration-300 hover:text-blue-600 sm:text-4xl">
        Recipe Sharing Platform
      </h1>
      
      {/* Add a visible Link element to ensure it's detected */}
      <div className="text-center mb-6">
        <Link 
          to="/" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Refresh Recipes
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg shadow-lg p-6 bg-gray-50">
        {recipes.map(recipe => (
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`}
            className="block transition-transform duration-300 hover:scale-105"
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;