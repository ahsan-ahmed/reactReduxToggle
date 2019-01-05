import { createStore, applyMiddleware,combineReducers } from 'redux';
import logger from 'redux-logger';
import user from '../Reducers/TextReducer/index';
//import auth from '../Reducers/authReducer/authReducer';

export default createStore(combineReducers({user}), applyMiddleware(logger))