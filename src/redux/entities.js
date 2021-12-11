import {combineReducers} from 'redux';
// import constructionSitesReducer from './constructionSitesReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
});
