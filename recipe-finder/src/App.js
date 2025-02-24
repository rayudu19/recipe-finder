import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    type: '',
    minTime: 0,
    maxTime: 60,
  });

  useEffect(() => {
    fetch("/recipe.json")
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        setFilteredRecipes(data);
      });
  }, []);

  // Filter recipes based on search query and filter options
  useEffect(() => {
    let filtered = recipes.filter((recipe) => {
      const matchesSearchQuery = recipe.name.toLowerCase().includes(query.toLowerCase()) || 
                                 recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()));
      const matchesType = filterOptions.type ? recipe.type === filterOptions.type : true;
      const matchesTime = recipe.preparationTime >= filterOptions.minTime && recipe.preparationTime <= filterOptions.maxTime;

      return matchesSearchQuery && matchesType && matchesTime;
    });

    setFilteredRecipes(filtered);
  }, [query, filterOptions, recipes]);

  return (
    <div className="app">
      <SearchBar query={query} setQuery={setQuery} />
      <FilterBar filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default App;
