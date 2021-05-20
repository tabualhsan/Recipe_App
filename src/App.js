import React, { useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = () => {

  const APP_ID = '6ca2a4cb';
  const APP_KEY ='b3937da8322b43a99883284299e4738e';
  const [recipes, setRecipes] = useState([]);
  

  useEffect( () => {

    getRecipes();

   
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
   

  }

  return(
  <div className="app">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit"> search </button>
    </form>  
    {recipes.map(recipe =>(
      <Recipe />
    ))}
  </div>
  );
};

export default App;
