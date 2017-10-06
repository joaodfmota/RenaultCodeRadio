/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Styles, Button, Text, Component } from 'reactxp';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    );
  }
}

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }),
  welcome: Styles.createTextStyle({
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }),
  instructions: Styles.createTextStyle({
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }),
};
