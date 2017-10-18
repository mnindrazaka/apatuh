/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './app/reducers';
import AppWithNavigationState from './app/index';
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const store = createStore(reducers);

export default class App extends Component {

  // constructor(props) {
  //   super(props);
		// SplashScreen.show();
		// setTimeout(() => {
		// 	SplashScreen.hide();
		// }, 5000);
  // }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </StyleProvider>
    );
  }
}