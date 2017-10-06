/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Styles, Button, Text, Component, TextInput } from 'reactxp';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
        securityCode: '',
        canSearch: false
    };
  }

  // http://rest.milangladis.com/
  // https://codepen.io/anon/pen/mepogj?editors=001
  // https://github.com/JedWatson/classnames

  render() {
    return (
      <View style={styles.container}>
        <div style={styles.codeRadioContainer}>
          <TextInput 
            placeholder="Enter your security code here..." 
            style={styles.codeRadioSecurityCode} 
            maxLength="4" 
            onChangeText={ this._onChangeSecurityCode }
            autoFocus={true}
          />
          <div style={styles.codeRadioSecuritySubmit}>
            <div style={styles.codeRadioSecurityInputHelper}>press [ENTER] or</div>
            Search
          </div>
        </div>
      </View>
    );
  }

  _onChangeSecurityCode = (newValue) => {
    if(newValue.length === 4) {
      this.setState({securityCode: newValue});
      this.setState({canSearch: true});
    } else {
      this.setState({securityCode: ''});
      this.setState({canSearch: false});
    }
  }
}

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
  }),
  codeRadioContainer: Styles.createWebViewStyle({
    position: 'relative',
    zIndex: 1,
    background: '#fff',
    display: 'block',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto'
  }),
  codeRadioSecurityCode: Styles.createTextInputStyle({
    backgroundColor: 'transparent',
    boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.1)',    
    color: '#686767',
    border: 'none',
    font: 'inherit',
    fontSize: '14px',
    height: '70px',
    lineHeight: '70px',
    marginLeft: 0,
    outline: 'none',
    overflow: 'hidden',
    paddingLeft: '30px',
    paddingRight: '175px',
    transition: 'all 0.3s ease',
    width: '100%',
    whiteSpace: 'nowrap',
  }),
  codeRadioSecuritySubmit: Styles.createViewStyle({
    position: 'absolute',
    height: '50px',
    padding: '0 30px',
    top: '10px',
    right: '10px',
    color: '#fff',
    fontSize: '12px',
    letterSpacing: '0.5px',
    lineHeight: 50,
    textTransform: 'uppercase',
    background: '#EDEDEF',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
  }),
  codeRadioSecurityInputHelper: Styles.createWebViewStyle({
    opacity: 0,
    position: 'absolute',
    right: '100%',
    color: '#A17BBC',
    whiteSpace: 'nowrap',
    fontSize: '10px',
    marginRight: '5px',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  })
};
