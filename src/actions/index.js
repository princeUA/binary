import axios from 'axios';
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';

export const loadRecipes = () => {
  axios.get('/api/recipes').then((res) => ({
    key: LOAD_RECIPES,
    payload: res
  }))
}

export const newRecipe = (name, description) => {
  axios.post('/api/receip/new', {name, description}).then((res) => ({
    key: ADD_RECIPE,
    payload: {name, description}
  }))
}
