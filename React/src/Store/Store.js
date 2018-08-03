import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';
import { getAllCities } from '../Actions/Actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getAllCities());

export default store;