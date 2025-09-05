import { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients';
      }
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to a server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          summary: '',
          image: '',
          ingredients: '',
          instructions: ''
        });
        setIsSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Recipe</h1>
      
      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Recipe submitted successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Recipe Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
            Recipe Summary *
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="3"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.summary ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Brief description of your recipe"
          />
          {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
            Ingredients * (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
            Instructions * (one step per line)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="7"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.instructions ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients and mix well"
          />
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;