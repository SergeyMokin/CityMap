import axios from 'axios';
import { GET_CITIES } from './Types';

const url = "https://api.myjson.com/bins/7ybe5";

export const getCities = (cities) => {
    return {
      type: GET_CITIES,
      cities
    }
  };
  
  export const getAllCities = () => {
    return (dispatch) => {
      return axios.get(url)
        .then(response => {
          dispatch(getCities(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };