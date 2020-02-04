import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const setIngredientHandler = (ingredient) => {
    setIngredients(prevIngredient => [...prevIngredient, 
      {id: Math.random().toString(), ...ingredient}]);
  }

  const removeItemHandler = (id) => {
    setIngredients(prevIngredient => prevIngredient.filter(ingredient => ingredient.id !== id ))
  }


  return (
    <div className="App">
      <IngredientForm ingredientHandler = {setIngredientHandler}  />

      <section>
        <Search/>
        <IngredientList ingredients = {ingredients} onRemoveItem = {removeItemHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
