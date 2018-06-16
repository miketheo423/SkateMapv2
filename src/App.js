import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBsAh5K2hjewXOUHr3vEtoVM2sePmzBW9M',
      authDomain: 'skatemapv2.firebaseapp.com',
      databaseURL: 'https://skatemapv2.firebaseio.com',
      projectId: 'skatemapv2',
      storageBucket: 'skatemapv2.appspot.com',
      messagingSenderId: '581982383462'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

export default App;