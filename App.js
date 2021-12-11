import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Navigation from './src/navigation/index';
import Booking from './SRCC/Booking';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
