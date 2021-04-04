import {LOAD_CITIES, SELECT_CITY} from './actionTypes'

export const loadCities = () => ({
  type: LOAD_CITIES,
  payload: {
    cities: [
      {id: 1, city: 'Toronto'},
      {id: 2, city: 'Los Angeles'},
      {id: 3, city: 'Quebec City'},
      {id: 4, city: 'Ottawa'},
      {id: 5, city: 'Austin'},
      {id: 6, city: 'New York'},
      {id: 7, city: 'Winnipeg'},
      {id: 8, city: 'Fayetteville'},
      {id: 9, city: 'New Jersey'},
      {id: 10, city: 'Florida'},
      {id: 11, city: 'Thunder Bay'},
      {id: 12, city: 'Paris'},
    ],
  },
})

export const selectCity = city => ({
  type: SELECT_CITY,
  payload: {city},
})
