import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) => set({ searchTerm: term }),
  
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      // Simple mock: recommend recipes with similar titles to favorites
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );
      const recommended = state.recipes.filter(
        (r) =>
          !state.favorites.includes(r.id) &&
          favoriteRecipes.some((fav) =>
            r.title.toLowerCase().includes(
              fav.title.split(" ")[0].toLowerCase()
            )
          )
      );
      return { recommendations: recommended };
    }),
}));
