import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import allReducers from './src/reducers/index.js';
import App from './src/App.js';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers, applyMiddleware(thunk));

export default class RootApp extends React.Component {
  render() { 
    return(
      <Provider store= {store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
