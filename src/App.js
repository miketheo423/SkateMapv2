import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';


class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default App;