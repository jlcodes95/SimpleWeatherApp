import {LOAD_CITIES, SELECT_CITY} from '../actionTypes'

const initialState = {
  cities: [],
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CITIES:
      return action.payload
    case SELECT_CITY:
      return action.payload
  }
  return state
}

export default cityReducer
