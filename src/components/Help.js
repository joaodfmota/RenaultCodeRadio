import React from 'react';
import { Component, Styles, Button, Text, Image } from 'reactxp';
var exampleImg = require("../images/example.jpg");

export default class ResultArea extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={_styles.container}>
        <div ref="helpArea">
          <Text style={_styles.helpText}>
            You can unlock the radio in your Renault car or van from the four digit security code number beginning with a letter (A to Z). 
            You will find the number printed on a label on the casing of the radio.
          </Text>
          <Image source={ './dist/' + exampleImg } style={_styles.exampleImg}></Image>
          <Button onPress={ this.props.onNavigateBack } style={_styles.defaultButton}>
              <Text>
                  Go Back
              </Text>
          </Button>
        </div>
      </div>
    );
  }
}

const _styles = {
  container: Styles.createViewStyle({
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    display: 'block',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
    color: '#FFF',
    fontSize: '24px'
  }),
  defaultButton: Styles.createViewStyle({
    height: '50px',
    padding: '0 30px',
    color: '#262626',
    fontSize: '12px',
    letterSpacing: '0.5px',
    lineHeight: 50,
    textTransform: 'uppercase',
    background: '#FFDE00',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'visible',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px'
  }),
  exampleImg: Styles.createImageStyle({
    height: '140px',
    width: '100%',
    marginTop: '20px'
  })
};