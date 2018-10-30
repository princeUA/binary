import { LOAD_RECIPES, ADD_RECIPE } from '../actions';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.key) {
    case LOAD_RECIPES:
      return {...action.payload}

    case ADD_RECIPE:
      return {...state, ...action.payload}

    default:
      return {...state};

  }
}
