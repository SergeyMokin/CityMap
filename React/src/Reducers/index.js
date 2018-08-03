import { combineReducers } from 'redux';
import cities from './Reducers';

export default combineReducers(
    {
        cities: cities
    }
);