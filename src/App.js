import './App.css';
import Recipe from "./Recipe";
import React, {useEffect, useState} from "react";

const App = () => {
  const app_id = "bf6f2417";
  const app_key = "8e821aae832458f21f698598db023cf8";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('boba')
  


  useEffect(() => {
   getRecipes();
  }, [query]
  );

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
    
  }
  return(
    
    <div className="App">
      <h1 style={{textAlign: 'center', fontSize: "50px", color: "lightcoral"}}>Recipes!</h1>
      <div style={{backgroundImage: 'url("www.thespruceeats.com/thmb/WTg1PrISJvs_JwD76q7p7SEcmT4=/1350x759/smart/filters:no_upscale()/mainimage-5c58ea5bc9e77c000102d151.jpg")'}}></div>
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit"> Search</button>
      </form>
      
      <div className="recipes" >
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.label}
        title = {recipe.recipe.label} 
        image = {recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
     </div>

    </div>
  );
};

export default App;
