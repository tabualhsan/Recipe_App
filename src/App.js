import React, { useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = () => {

  const APP_ID = '6ca2a4cb';
  const APP_KEY ='b3937da8322b43a99883284299e4738e';
  const [search, setSearch] = useState('');
  //state componet that gets passed to the prop compnent below
  const [recipes, setRecipes] = useState([]);
  // to fetch data in search bar
  const [query, setQuery] = useState('chicken');

  

  useEffect( () => {
    getRecipes();
  }, [query]);

  // only work when you submit^

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
   

  };

  const updateSearch = e =>{
    setSearch(e.target.value);


  }

  const getSearch = e =>{
    // stops page refresh 
    e.preventDefault();
    setQuery(search);
    getSearch('');
    // the search bar will go back to empty ^
  }

  return(
  <div className="app">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit"> search </button>
    </form>  

    {/* props */}
    <div className="recipes">
    {recipes.map(recipe =>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image} 
      ingredients={recipe.recipe.ingredients}
      />
    ))}
    </div>
  </div>
  );
};

export default App;
