/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * UA-108235469-1
 */

import React from 'react';
import { View, Component, Styles, Types } from 'reactxp';
import { Navigator } from 'reactxp-navigation';

import CodeInput from './components/CodeInput';
import ResultArea from './components/ResultArea';
import Help from './components/Help';

let NavigationRouteId = {
  Main: "CodeInput",
  Result: "ResultArea",
  Help: "Help"
};

export default class App extends Component<{}> {
  _navigator;

  constructor(props) {
    super(props);
    this.state = {
      securityCode: '',
    };
    this._onNavigatorRef = this._onNavigatorRef.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this._onPressNavigate = this._onPressNavigate.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
    this._setCode = this._setCode.bind(this);
    this._getCode = this._getCode.bind(this, this.state.securityCode);
    this._getHelp = this._getHelp.bind(this);
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
        return <CodeInput onPressNavigate={ this._onPressNavigate } setCode={this._setCode} getHelp={this._getHelp} />;
      case NavigationRouteId.Result:
        return <ResultArea onNavigateBack={ this._onPressBack } getCode={this._getCode} />;
      case NavigationRouteId.Help:
        return <Help onNavigateBack={ this._onPressBack } getCode={this._getCode} />;
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
    this.setState({securityCode: code}, () => {
      this._onPressNavigate();
    });
  }

  _getHelp() {
    this._navigator.push({
      routeId: NavigationRouteId.Help,
      sceneConfigType: Types.NavigatorSceneConfigType.Fade
    });
  }
  
  _getCode() {
    return this.state.securityCode;
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
