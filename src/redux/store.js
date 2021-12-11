import reducer from './reducer';
// import api from '../middlewares/api';
import {applyMiddleware, createStore, compose} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Presistance configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
// Array of middlewares
const middleware = [thunk];

// Compsing enhacers for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducer);

// Modifying reducer support clearing persistance.
const root = (state, action) => {
  if (action.type === 'user/userLogoutReq') {
    AsyncStorage.removeItem('persist:root');
    return persistedReducer(undefined, action);
  } else {
    return persistedReducer(state, action);
  }
};

export const store = createStore(
  root,
  composeEnhancers(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
