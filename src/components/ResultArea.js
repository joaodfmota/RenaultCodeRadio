import React from 'react';
import { Component, TextInput, Styles, Button } from 'reactxp';

export default class ResultArea extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={_styles.container} ref="resultArea">
        RESULT
      </div>
    );
  }
}

const _styles = {
  container: Styles.createViewStyle({
    position: 'relative',
    zIndex: 1,
    background: '#fff',
    display: 'block',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
  })
};