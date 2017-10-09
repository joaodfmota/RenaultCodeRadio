/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Component, Styles, Types } from 'reactxp';

import { Navigator } from 'reactxp-navigation';

import CodeInput from './components/CodeInput';
import ResultArea from './components/ResultArea';

let NavigationRouteId = {
  Main: "CodeInput",
  Result: "ResultArea"
};

export default class App extends Component<{}> {
  _navigator;

  constructor(props) {
    super(props);
    this._onNavigatorRef = this._onNavigatorRef.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this._onPressNavigate = this._onPressNavigate.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
    this.state = {
      securityCode: '',
    };
  }

  componentDidMount() {
    this._navigator.immediatelyResetRouteStack([{
        routeId: NavigationRouteId.Main,
        sceneConfigType: Types.NavigatorSceneConfigType.Fade       
    }]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref={ this._onNavigatorRef }
          renderScene={ this._renderScene }
        />
      </View>
    );
  }

  _onNavigatorRef(navigator) {
    this._navigator = navigator;
  }

  _renderScene(navigatorRoute) {
    switch (navigatorRoute.routeId) {
      case NavigationRouteId.Main:
        return <CodeInput onPressNavigate={ this._onPressNavigate } />;
      case NavigationRouteId.Result:
        return <ResultArea onNavigateBack={ this._onPressBack } setCode={this.props._setCode}  />;
      }
    return null;
  }

  _onPressNavigate() {
    this._navigator.push({
      routeId: NavigationRouteId.Result,
      sceneConfigType: Types.NavigatorSceneConfigType.Fade
    });
  }

  _onPressBack() {
    this._navigator.pop();
  }

  _setCode(code) {
    this.setState({securityCode: code});     
  }
  
  // http://rest.milangladis.com/
  // https://codepen.io/anon/pen/mepogj?editors=001
  // https://github.com/JedWatson/classnames
}

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  })
};
