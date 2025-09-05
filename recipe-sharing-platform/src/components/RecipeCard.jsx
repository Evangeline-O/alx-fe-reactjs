const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={recipe.image} 
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;